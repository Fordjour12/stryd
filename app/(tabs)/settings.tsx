import { CxButton } from "@/components/CxButton";
import { useAuth } from "@clerk/clerk-expo";
import { router } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function Settings() {
  const { signOut, isSignedIn } = useAuth();
  if (!isSignedIn) {
    router.replace("/(auth)/auth");
  }

  return (
    <View>
      <Text>settings</Text>
      <View style={{ paddingHorizontal: 10 }}>
        <CxButton text="Logout" onPress={() => signOut()} />
      </View>
    </View>
  );
}
