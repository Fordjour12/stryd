import { Stack } from "expo-router";
import React from "react";

export default function BoardedLayout() {
  return (
    <Stack>
      <Stack.Screen name="notification" options={{ headerShown: false }} />
      <Stack.Screen name="question" options={{ headerShown: false }} />
    </Stack>
  );
}
