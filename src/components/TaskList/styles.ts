import { StyleSheet } from "react-native";

import { colors, fontFamily } from "@/styles/theme";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -32,
  },
  statusContainer: {
    padding: 8,
    flexDirection: "row",
    borderBottomWidth: 2,
    borderStyle: "solid",
    borderBottomColor: colors.base[400],
    marginBottom: 2,
  },
  statusItem: {
    flex: 1,
    flexDirection: "row",
    color: "yellow",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  statusTextCreated: {
    textAlign: "center",
    fontSize: 14,
    fontFamily: fontFamily.bold,
    color: colors.product.blue,
  },
  statusTextDone: {
    textAlign: "center",
    fontSize: 14,
    fontFamily: fontFamily.bold,
    color: colors.product.purple,
  },
  statusCounter: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.base[400],
    
    borderRadius: 100,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  statusCounterText: {
    fontFamily: fontFamily.bold,
    color: colors.base[200],
  },
  flatList: {
    flex: 1,
  },
  listEmptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  listEmptyTextBold: {
    fontFamily: fontFamily.bold,
    fontSize: 14,
    color: colors.base[300],
  },
  listEmptyTextRegular: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    color: colors.base[300],
  },
  icon: {
    margin: 25,
  },
  taskContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    flexDirection: "row",
    padding: 12,
    borderRadius: 8,
    borderWidth: 2,
    gap: 8,
    borderColor: colors.base[400],
    backgroundColor: colors.base[500],
  },
  taskCheck: {
    justifyContent: "center",
    alignItems: "center",
  },
  taskText: {
    flex: 1,
    fontSize: 14,
    textAlign: "center",
    color: colors.base[100],
  },
  taskTextCompleted: {
    flex: 1,
    fontSize: 14,
    textAlign: "center",
    textDecorationLine: "line-through",
    color: colors.base[300],
  },
  taskDelete: {
    justifyContent: "center",
    alignItems: "center",
  },
});
