import { useAuth } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";

export default function Two() {
  const { signOut, isSignedIn } = useAuth();

  return (
    <View>
      <Text>two</Text>
      <Button title="logout" onPress={() => signOut()} />

      {!isSignedIn && (
        <Link href="/(auth)/login">
          <Text>Login</Text>
        </Link>
      )}
    </View>
  );
}
