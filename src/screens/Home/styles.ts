import { StyleSheet } from "react-native";
import { colors } from "../../styles/theme";
import { fontFamily } from "../../styles/theme";

export const s = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: colors.base[700],
    alignItems: "center",
  },
  text: {
    fontSize: 32,
    fontFamily: fontFamily.regular,
    color: colors.base[300],
  },
  image: {
    marginTop: 100,
    marginBottom: 80,
  },
});
