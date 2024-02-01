import { db } from "@/constants/firebase";
import data from "@/onboardingquestion.json";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
      <View>
        <Text>Thank you for answering the questions!</Text>
      </View>
    );
  }

  async function nogree() {
    const docRef = await addDoc(collection(db, "cities"), {
      name: "Tokyo",
      country: "Japan",
    });
  }

  return (
    <SafeAreaView>
      <View>
        <Text>{questions[currentQuestionIndex].question}</Text>
        {/*{questions[currentQuestionIndex].options?.map((option) => (
          <Button
            key={option}
            onPress={() => handleOptionPress(option)}
            title={option}
          />
        ))} 
        */}
        {questions[currentQuestionIndex].options ? (
          questions[currentQuestionIndex].options?.map((option: string) => (
            <Button
              key={option}
              onPress={() => handleOptionPress(option)}
              title={option}
            />
          ))
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
    </SafeAreaView>
  );
}
