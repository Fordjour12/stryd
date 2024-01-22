import data from "@/onboardingquestion.json";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// interface Question {
// question: string;
// options: string[];
// }

const questions = data.questions;

// Assuming questions is the array of questions imported from your JSON file

export default function Questionnaire() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [inputValue, setInputValue] = useState("");
  const [showInput, setShowInput] = useState(false);

  // const handleAnswer = (answer: string) => {
  //   if (answer.includes("please specify")) {
  //     setShowInput(true);
  //   } else {
  //     setAnswers({
  //       ...answers,
  //       [questions[currentQuestionIndex].question]: answer,
  //     });
  //     setCurrentQuestionIndex(currentQuestionIndex + 1);
  //   }
  // };

  // const handleInputBlur = () => {
  //   handleAnswer(inputValue);
  //   setInputValue(""); // reset the TextInput value
  // };
  const [selectedOption, setSelectedOption] = useState<string | null>(null); // new state for the selected option

  const handleOptionPress = (option: any) => {
    setSelectedOption(option);
    if (!option.includes("please specify")) {
      handleAnswer(option);
    }
  };

  const handleAnswer = (answer: string) => {
    setAnswers({
      ...answers,
      [questions[currentQuestionIndex].question]: answer,
    });
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedOption(null); // reset the selected option
  };

  const handleInputBlur = () => {
    handleAnswer(inputValue);
    setInputValue(""); // reset the TextInput value
  };

  if (currentQuestionIndex >= questions.length) {
    return <div>Thank you for answering the questions!</div>;
  }

  return (
    <SafeAreaView>
      <View>
        <Text>{questions[currentQuestionIndex].question}</Text>
        {/* {questions[currentQuestionIndex].options?.map((option) => (
          <Button
            key={option}
            onPress={() => handleOptionPress(option)}
            title={option}
          />
        ))} */}
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
