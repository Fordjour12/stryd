import Colors from "@/constants/Colors";
import { Link } from "expo-router";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const starImageSource = require("../../assets/images/stars-slate.png");
const fireImageSource = require("../../assets/images/fire-coral.png");
const heartImageSource = require("../../assets/images/heart-coral.png");
const peopleImageSource = require("../../assets/images/people-coral.png");
const notifyImageSource = require("../../assets/images/notify.png");

export default function Notification() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.notifyHead}>
          Do you want to turn on Notifications?
        </Text>
      </View>
      <Image source={notifyImageSource} style={styles.notifyImg} />
      <View style={{ gap: 13, marginVertical: 20 }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Image source={starImageSource} style={styles.img} />
          <Text style={{ fontFamily: "Roboto", fontSize: 16.5 }}>
            New Weekly Healthier Reminders
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Image source={fireImageSource} style={styles.img} />
          <Text style={{ fontFamily: "Roboto", fontSize: 16.5 }}>
            Motivational Reminder
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Image source={heartImageSource} style={styles.img} />
          <Text style={{ fontFamily: "Roboto", fontSize: 16.5 }}>
            Personalized Programs & Tracking
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Image source={peopleImageSource} style={styles.img} />
          <Text style={{ fontFamily: "Roboto", fontSize: 16.5 }}>
            Community Engagement
          </Text>
        </View>
      </View>
      //TODO: this is not a link
      <Link href="/(questions)/question">
        <Pressable style={styles.allow}>
          <Text
            style={{
              color: "white",
              fontSize: 16,
              fontFamily: "Raleway-SemiBold",
            }}
          >
            Allow Notification
          </Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  notifyHead: {
    fontFamily: "Raleway-Black",
    fontSize: 30,
    alignItems: "center",
    padding: 16,
  },
  img: {
    width: 30,
    height: 30,
  },
  notifyImg: {
    width: 350,
    height: 350,
  },
  allow: {
    backgroundColor: Colors.coral,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
});
