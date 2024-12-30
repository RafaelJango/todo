import { StyleSheet } from "react-native";

import { colors } from "@/styles/theme";

export const s = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: 200, // Ajuste a altura conforme necessário
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.base[700],
  },
  image: {
    marginTop: 30,
  },
});
