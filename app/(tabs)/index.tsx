import { Link } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

export default function index() {
  return (
    <View>
      <Text>page one</Text>
      <Link href="/question" style={{ padding: 30, backgroundColor: "black" }}>
        <Pressable>
          <Text style={{ color: "white" }}>go to question</Text>
        </Pressable>
      </Link>
    </View>
  );
}
