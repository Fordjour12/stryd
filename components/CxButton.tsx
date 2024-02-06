import { defaultStyles } from "@/constants/Styles";
import React, { ReactNode } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

type SocialProps = {
  SocialText: string;
  Icon: ReactNode;
  onPress: () => void;
};

const CxButtonSocial = (props: SocialProps) => {
  return (
    <TouchableOpacity style={styles.SocialBtnOutline} onPress={props.onPress}>
      {props.Icon}
      <Text style={styles.SocialBtnOutlineText}>{props.SocialText}</Text>
    </TouchableOpacity>
  );
};

type ButtonProps = {
  onPress?: () => void;
  text: string;
  style?: StyleProp<ViewStyle>;
};

const CxButton = (props: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[defaultStyles.btn, props.style]}
      onPress={props.onPress}
    >
      <Text style={defaultStyles.btnText}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export { CxButton, CxButtonSocial };

const styles = StyleSheet.create({
  SocialBtnOutline: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "grey",
    height: 50,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  SocialBtnOutlineText: {
    color: "#000",
    fontSize: 16,
    fontFamily: "Raleway-SemiBold",
  },
});
