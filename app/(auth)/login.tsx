import { CxButton, CxButtonSocial } from "@/components/CxButton";
import { defaultStyles } from "@/constants/Styles";
import { useWarmUpBrowser } from "@/hooks/warmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

enum AuthType {
  Google = "oauth_google",
  Facebook = "oauth_facebook",
}

export default function Login() {
  useWarmUpBrowser();

  // const router = useRouter();

  const { startOAuthFlow: googleAuth } = useOAuth({ strategy: "oauth_google" });
  const { startOAuthFlow: facebookAuth } = useOAuth({
    strategy: "oauth_facebook",
  });

  const onSelectAuthType = async (authType: AuthType) => {
    const authTypeMap = {
      [AuthType.Google]: googleAuth,
      [AuthType.Facebook]: facebookAuth,
    }[authType];

    try {
      const { createdSessionId, setActive } = await authTypeMap();

      if (createdSessionId) {
        setActive?.({ session: createdSessionId });
        router.push("/(tabs)/");
      }
    } catch (error) {
      console.error("OAuth error", error);
    }
  };

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");

  React.useEffect(() => {
    console.log("Email:", emailAddress);
    console.log("Password:", password);
  }, [emailAddress,password]);


  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={defaultStyles.inputField}
          onChangeText={setEmailAddress}
          value={emailAddress}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="Email"
        />
        <TextInput
          style={defaultStyles.inputField}
          onChangeText={setPassword}
          value={password}
          secureTextEntry
          placeholder="Password"
        />

        <View style={{ marginVertical: 10 }}>
          <Text style={{ textAlign: "right", fontFamily: "Roboto-Medium" }}>
            Forgot password?
          </Text>
        </View>

        <CxButton text="Sign In" />
      </View>
      <View style={styles.separatorView}>
        <View
          style={{
            borderBottomWidth: StyleSheet.hairlineWidth,
            flex: 1,
            borderBottomColor: "black",
          }}
        />
        <Text style={styles.separator}>or</Text>
        <View
          style={{
            borderBottomWidth: StyleSheet.hairlineWidth,
            flex: 1,
            borderBottomColor: "black",
          }}
        />
      </View>

      <View style={{ gap: 20 }}>
        <CxButtonSocial
          SocialText="Continue with Google"
          Icon={
            <Ionicons
              name="logo-google"
              size={24}
              style={defaultStyles.btnIcon}
            />
          }
          onPress={() => onSelectAuthType(AuthType.Google)}
        />
        <CxButtonSocial
          SocialText="Continue with Facebook"
          Icon={
            <Ionicons
              name="logo-facebook"
              size={24}
              style={defaultStyles.btnIcon}
            />
          }
          onPress={() => onSelectAuthType(AuthType.Facebook)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 26,
  },
  separatorView: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginVertical: 30,
  },
  separator: {
    fontFamily: "Roboto",
    color: "gray",
    fontSize: 16,
  },
  btnOutline: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: Colors.grey,
    height: 50,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  btnOutlineText: {
    color: "#000",
    fontSize: 16,
    fontFamily: "Raleway-SemiBold",
  },
});
