import { CxButton } from "@/components/CxButton";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Animated, Image, StyleSheet, View } from "react-native";
import { RulerPicker } from "react-native-ruler-picker";

export default function Weight() {
  const [weight, setWeight] = useState<string>();
  const [textAnim] = useState(new Animated.Value(500));
  const [buttonAnim] = useState(new Animated.Value(500));
  const [textOpacity] = useState(new Animated.Value(0));
  const [buttonOpacity] = useState(new Animated.Value(0));
  const [pickerOpacity] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(textAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    Animated.timing(buttonAnim, {
      toValue: 1,
      duration: 1000,
      delay: 500,
      useNativeDriver: true,
    }).start();
    Animated.timing(textOpacity, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    Animated.timing(buttonOpacity, {
      toValue: 1,
      duration: 2000,
      delay: 500,
      useNativeDriver: true,
    }).start();
    Animated.timing(pickerOpacity, {
      toValue: 1,
      duration: 2000,
      delay: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  //   TODO: Add the weight to the user's profile
  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: pickerOpacity, paddingVertical: 20 }}>
        <Image
          source={require("../../assets/images/weight-scale.png")}
          // style={{ width: "100%", height: "100%", marginBottom: 20 }}
        />
      </Animated.View>
      <Animated.Text
        style={[
          styles.weight,
          { transform: [{ translateY: textAnim }], opacity: textOpacity },
        ]}
      >
        What is your weight?
      </Animated.Text>
      <Animated.View style={{ opacity: pickerOpacity, paddingVertical: 20 }}>
        <RulerPicker
          min={0}
          max={240}
          step={1}
          fractionDigits={0}
          initialValue={30}
          onValueChange={(number) => setWeight(number)}
          onValueChangeEnd={(number) => setWeight(number)}
          unit="Kg"
          height={150}
          indicatorHeight={20}
          longStepHeight={10}
          shortStepHeight={5}
        />
      </Animated.View>
      <Animated.View
        style={{
          transform: [{ translateY: buttonAnim }],
          opacity: buttonOpacity,
        }}
      >
        <CxButton
          style={{ paddingHorizontal: 16 }}
          text="continue"
          onPress={() => router.push("/(questions)/height")}
        />
      </Animated.View>
    </View>
  );
}
// What is your weight?
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  weight: {
    fontFamily: "Raleway-Bold",
    fontSize: 25,
  },
});
