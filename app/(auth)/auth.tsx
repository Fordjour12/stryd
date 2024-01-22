import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { Link } from "expo-router";
import React, { useEffect, useRef } from "react";
import {
  Animated,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Auth() {
  const bgImageSource = require("../../assets/images/auth-bg.jpg");

  const infoTextPosition = useRef(new Animated.Value(500)).current; // initial position at the bottom
  const textOpacity = useRef(new Animated.Value(0)).current; // initial opacity: 0 (invisible)
  const buttonOpacity = useRef(new Animated.Value(0)).current; // initial opacity: 0 (invisible)

  useEffect(() => {
    Animated.sequence([
      Animated.timing(infoTextPosition, {
        toValue: 0, // final position at the top
        duration: 1000, // duration of animation
        useNativeDriver: true, // use native driver for better performance
      }),
      Animated.timing(textOpacity, {
        toValue: 1, // final opacity: 1 (visible)
        duration: 500, // duration of animation
        useNativeDriver: true, // use native driver for better performance
      }),
      Animated.timing(buttonOpacity, {
        toValue: 1, // final opacity: 1 (visible)
        duration: 500, // duration of animation
        useNativeDriver: true, // use native driver for better performance
      }),
    ]).start();
  }, []);

  return (
    <ImageBackground source={bgImageSource} style={styles.container}>
      <View style={{ flex: 0.6 }} />
      <Animated.View
        style={[
          styles.infoContainer,
          { transform: [{ translateY: infoTextPosition }] },
        ]}
      >
        <Animated.Text style={[styles.infoHeader, { opacity: textOpacity }]}>
          Welcome,
        </Animated.Text>
        <Animated.Text style={[styles.infoText, { opacity: textOpacity }]}>
          Unlock the doors to fitness excellence! Verify or Create an account to
          join our dedicated team of health enthusiasts. Your journey to a
          healthier lifestyle begins now. Welcome aboard!
        </Animated.Text>
        <Animated.View style={{ opacity: buttonOpacity, marginVertical: 30 }}>
          <Link href="/(auth)/login" asChild style={defaultStyles.btn}>
            <Pressable>
              <Text style={defaultStyles.btnText}>Continue</Text>
            </Pressable>
          </Link>
        </Animated.View>
      </Animated.View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoContainer: {
    flex: 0.4,
    padding: 20,
    backgroundColor: "hsla(0 0% 100% / 0.8)",
  },
  infoHeader: {
    fontFamily: "Raleway-Bold",
    fontSize: 30,
    color: Colors.coral,
  },
  infoText: {
    fontFamily: "Roboto",
    fontSize: 17,
    color: Colors.slateDarker,
    marginTop: 20,
  },
});
