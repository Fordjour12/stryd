import Colors from "@/constants/Colors";
import { Tabs } from "expo-router";
import { Image } from "react-native";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveBackgroundColor: Colors.slateDarker }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Training",
          tabBarLabel: "Training",
          tabBarIcon: () => (
            <Image
              source={require("../../assets/images/training.png")}
              style={{ width: 20, height: 20 }}
            />
          ),
          tabBarLabelStyle: {
            fontFamily: "Raleway-SemiBold",
            color: Colors.slate,
          },
        }}
      />
      <Tabs.Screen
        name="discovery"
        options={{
          title: "Discovery",
          tabBarLabel: "Discovery",
          tabBarIcon: () => (
            <Image
              source={require("../../assets/images/discovery.png")}
              style={{ width: 20, height: 20 }}
            />
          ),
          tabBarLabelStyle: {
            fontFamily: "Raleway-SemiBold",
            color: Colors.slate,
          },
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarLabel: "History",
          tabBarIcon: () => (
            <Image
              source={require("../../assets/images/history.png")}
              style={{ width: 20, height: 20 }}
            />
          ),
          tabBarLabelStyle: {
            fontFamily: "Raleway-SemiBold",
            color: Colors.slate,
          },
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarLabel: "Settings",
          tabBarIcon: () => (
            <Image
              source={require("../../assets/images/setting.png")}
              style={{ width: 20, height: 20 }}
            />
          ),
          tabBarLabelStyle: {
            fontFamily: "Raleway-SemiBold",
            color: Colors.slate,
          },
        }}
      />
    </Tabs>
  );
}
