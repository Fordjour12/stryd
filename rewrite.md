```ts
import AnswersBox from "@/components/AnswersBox";
import { db } from "@/constants/firebase";
import { questions } from "@/constants/onboardingquestion";
import { Link } from "expo-router";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const questions = data.questions;

export default function Questionnaire() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>();
  const [inputValue, setInputValue] = useState("");

  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionPress = async (option: any) => {
    setSelectedOption(option);
    if (!option.includes("please specify")) {
      handleAnswer(option);
    }
  };

  const handleAnswer = async (answer: string) => {
    const answerToQuestions = {
      ...answers,
      [questions[currentQuestionIndex].question]: answer,
    };

    setAnswers(answerToQuestions);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedOption(null); // reset the selected option

    try {
      await setDoc(doc(db, "answers", "questionnaire"), answerToQuestions);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const handleInputBlur = () => {
    handleAnswer(inputValue);
    setInputValue(""); // reset the TextInput value
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
    <View style={styles.container}>
      <Text style={styles.question}>
        {questions[currentQuestionIndex].question}
      </Text>
      {questions[currentQuestionIndex].options ? (
        <View style={{ gap: 20, flexDirection: "row" }}>
          {questions[currentQuestionIndex].options?.map((option: string) => (
            // <Button
            //   key={option}
            //   onPress={() => handleOptionPress(option)}
            //   title={option}
            // />
            <AnswersBox
              option={option}
              image={questions[currentQuestionIndex].images}

            />
          ))}
        </View>
      ) : (
        <TextInput
          value={inputValue}
          onChangeText={setInputValue}
          onBlur={handleInputBlur}
          placeholder="Type your answer here"
        />
      )}
      {selectedOption?.includes("please specify") && (
        <TextInput
          value={inputValue}
          onChangeText={setInputValue}
          onBlur={handleInputBlur}
          placeholder="Please specify"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  question: {
    fontSize: 20,
    marginBottom: 20,
    fontFamily: "Roboto-Medium",
  },
});
```
