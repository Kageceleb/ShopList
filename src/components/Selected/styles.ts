import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.black,
        padding:8,
        borderRadius: theme.borderRadius.lg,
        position: "absolute",
        bottom: 12,
        width: "100%",
        alignSelf: "center",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
    },
    label:{
        color: theme.colors.white,
        fontSize: theme.fonts.size.body.sm,
        fontFamily: theme.fonts.family.regular,
    }
})