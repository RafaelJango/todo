import { Image, View } from "react-native";

import { s } from "./styles";

export default function Header() {
  return (
    <View style={s.imageContainer}>
      <Image style={s.image} source={require("../../../assets/Logo.png")} />
    </View>
  );
}
