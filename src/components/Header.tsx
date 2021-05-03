import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import colors from "../styles/colors";
import userImg from "../assets/profile.png";
import fonts from "../styles/fonts";

import AsyncStorage from "@react-native-async-storage/async-storage";

export function Header() {
  const [userName, setUserName] = useState<string>();

  useEffect(() => {
    async function loadStorageUserName() {
      const name = await AsyncStorage.getItem("@plantmanager:user");
      setUserName(name || "");
    }

    loadStorageUserName();
  }, [userName]);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>{userName}</Text>
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
    lineHeight: 40,
  },
});
