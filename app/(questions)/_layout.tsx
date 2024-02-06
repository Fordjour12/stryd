import { Stack } from "expo-router";
import React from "react";

export default function BoardedLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="notification" options={{ headerShown: false }} />
      <Stack.Screen name="weight" options={{ headerShown: false }} />
      <Stack.Screen name="height" options={{ headerShown: false }} />
    </Stack>
  );
}
