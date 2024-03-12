import { StyleSheet } from "react-native"

import { theme } from "@/theme"

export const styles = StyleSheet.create({
  button: {
    height: 42,
    backgroundColor: theme.colors.gray_200,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.borderRadius.full,
    borderWidth: 2,
    paddingHorizontal: 16,
    flexDirection:"row",
    gap: 6
  },
  text: {
    color: theme.colors.white,
    fontSize: theme.fonts.size.body.sm,
    fontFamily: theme.fonts.family.medium,
  },
  image:{
    width: 16,
    height: 16,
},
})