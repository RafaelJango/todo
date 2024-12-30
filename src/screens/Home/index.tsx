import React from "react";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { View } from "react-native";

import { s } from "./styles";
import Header from "../../components/Header";
import TaskInput from "../../components/TaskInput";
import Loading from "../../components/Loading";
import TaskList from "@/components/TaskList";

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
        <TaskList />
      </View>
    </>
  );
}
