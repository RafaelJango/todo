import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.base[600],
    padding: 32,
  },
  
  text: {
    fontSize: 32,
    fontFamily: fontFamily.regular,
    color: colors.base[300],
  },
  
});
