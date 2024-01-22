import { Stack } from "expo-router";
import React from "react";

export default function AuthRouteLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="auth"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="login"
        options={{
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
