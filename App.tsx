import React from "react";
import { UserIdentification } from "./src/pages/UserIdentification";
import Routes from "./src/routes";
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from "@expo-google-fonts/jost";
import { Text, View } from "react-native";
import AppLoading from "expo-app-loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Routes />;
}
