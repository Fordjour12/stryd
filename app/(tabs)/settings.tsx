import { CxButton } from "@/components/CxButton";
import { useUser } from "@clerk/clerk-expo";
import React from "react";
import { Text, View } from "react-native";

export default function Settings() {
  const { user } = useUser();

  return (
    <View>
      <Text>settings</Text>
      <Text>{user?.emailAddresses.toLocaleString()}</Text>
      <View style={{ paddingHorizontal: 10 }}>
        <CxButton text="Logout" onPress={() => console.log("object :>> ")} />
      </View>
    </View>
  );
}
