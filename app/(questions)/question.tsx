import AnswersBox from "@/components/AnswersBox";
import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { questions } from "@/constants/onboardingquestion";
import { Link } from "expo-router";
import React, { useState } from "react";
import {
  Pressable,
  ProgressBarAndroid,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Question() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const progressBarLength = (currentQuestionIndex + 1) / questions.length;

  // TextInput
  const [inputValue, setInputValue] = useState<string>("");

  function handleInputBlur() {
    handleAnswer(inputValue);
    setInputValue("");
  }

  // answering the question
  const handleAnswer = (answer: string) => {
    const answerToQuestion = {
      ...answers,
      [questions[currentQuestionIndex].question]: answer,
    };

    console.log(answerToQuestion);

    setAnswers(answerToQuestion);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedOption(null);
  };

  const handleOptionPress = (option: string) => {
    setSelectedOption(option);
    if (!option.includes("Specify")) {
      handleAnswer(option);
    }
  };

  if (currentQuestionIndex >= questions.length) {
    return (
      <View style={styles.container}>
        <Text>Thank you for answering the questions!</Text>

        <Link href="/" asChild>
          <Pressable>
            <Text>Completed</Text>
          </Pressable>
        </Link>
      </View>
    );
  }

  return (
    <>
      <View style={styles.container}>
        <View>
          <ProgressBarAndroid
            styleAttr="Horizontal"
            indeterminate={false}
            progress={progressBarLength}
            color={Colors.coral}
          />
        </View>
        <Text style={styles.questions}>
          {questions[currentQuestionIndex].question}
        </Text>
        {questions[currentQuestionIndex].options ? (
          <View
            style={{
              columnGap: 10,
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            {questions[currentQuestionIndex].options?.map(
              (option: string, index: number) => (
                <AnswersBox
                  key={option}
                  option={option}
                  image={questions[currentQuestionIndex].images?.[index]}
                  onPress={() => handleOptionPress(option)}
                />
              )
            )}
          </View>
        ) : null}
      </View>
      {selectedOption?.includes("Specify") && (
        <TextInput
          style={[defaultStyles.inputField, { marginHorizontal: 10 }]}
          value={inputValue}
          onChangeText={setInputValue}
          onBlur={handleInputBlur}
          placeholder="Please Specify"
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  questions: {
    fontFamily: "Raleway-Bold",
    fontSize: 20,
    paddingBottom: 20,
  },
});
