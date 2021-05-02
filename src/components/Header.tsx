import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import colors from "../styles/colors";
import userImg from "../assets/profile.png";
import fonts from "../styles/fonts";

export function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>Vinicius</Text>
      </View>

      <Image source={userImg} style={styles.image}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    marginTop: 30,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 70,
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  userName: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 40
  },
});
