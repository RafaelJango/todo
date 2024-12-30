import React from "react";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import Loading from "../../components/Loading";

import { s } from "./styles";
import { colors } from "../../styles/theme";
import Header from "../../components/Header";
import TaskInput from "../../components/TaskInput";

export default function Home() {
  const [fontLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontLoaded) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <View style={s.container}>
        <TaskInput />
      </View>
    </>
  );
}
