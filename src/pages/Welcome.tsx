import React from "react";
import {
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  View,
} from "react-native";
import wateringImage from "../assets/watering.png";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

export function Welcome() {
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate("UserIdentification");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Gerencie {"\n"} suas plantas de {"\n"} forma fácil
        </Text>

        <Image
          resizeMode="contain"
          source={wateringImage}
          style={styles.image}
        />
        <Text style={styles.subtitle}>
          Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
          sempre que precisar.
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.button}
          onPress={handleStart}
        >
          <Text style={styles.buttonIcon}>
            <Feather style={styles.buttonIcon} name="chevron-right"></Feather>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.heading,
    marginTop: 38,
    fontFamily: fonts.heading,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
    fontFamily: fonts.complement,
  },
  image: {
    height: Dimensions.get("window").width * 0.7,
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    height: 56,
    width: 56,
  },
  buttonIcon: {
    color: colors.white,
    fontSize: 32,
  },
});
