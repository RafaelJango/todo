import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { View, Text, Image } from "react-native";
import Loading from "../../components/Loading";

import { s } from "./styles";

export default function Home() {
  const [fonteLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fonteLoaded) {
    return <Loading />;
  }

  return (
    <View style={s.Container}>
      <Image style={s.image} source={require("../../../assets/Logo.png")} />
    </View>
  );
}
