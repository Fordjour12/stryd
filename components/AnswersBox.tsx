import Colors from "@/constants/Colors";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type AnswersBoxProps = {
  option: string;
  image: any;
  onPress: () => void;
};

export default function AnswersBox(props: AnswersBoxProps) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{ width: "48%", marginVertical: 10, alignItems: "center" }}
    >
      <View style={styles.container}>
        <Image
          source={props.image}
          style={{ width: 150, height: 120, objectFit: "contain" }}
        />
        <Text style={styles.options}>{props.option}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: Colors.slate,
    height: 150,
    width: 150,
  },
  options: {
    fontFamily: "Roboto",
    fontSize: 16.5,
    textAlign: "center",
    color: "white",
  },
});
