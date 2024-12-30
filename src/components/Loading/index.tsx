import { ActivityIndicator } from "react-native";

import { s } from "./styles";
import { colors } from "../../styles/colors";

export default function Loading() {
  return (
    <ActivityIndicator
      color={colors.product.purpleDark}
      style={s.container}
      size={"large"}
    />
  );
}
