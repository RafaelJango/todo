import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const s = StyleSheet.create({
  form: {
    bottom: 65,
    flexDirection: "row",
  },
  input: {
    flex: 1,
    width: "100%",
    height: 54,
    padding: 16,
    fontSize: 16,
    borderRadius: 6,
    marginRight: 4,
    backgroundColor: colors.base[500],
    color: colors.base[100],
  },
  button: {
    borderRadius: 6,
    height: 54,
    width: 54,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.product.blue,
  },
});
