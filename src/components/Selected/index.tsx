import { Text, View } from "react-native"
import { styles } from "./styles"
import { MaterialIcons } from "@expo/vector-icons"
import Animated, { SlideInDown, BounceOutDown } from "react-native-reanimated"
import { theme } from "@/theme"
import { Button } from "../Button"

type Props = {
    quantity: number
    onClear: () => void
    listAll: () => void
}

export function Selected({ quantity, onClear, listAll}: Props){
    return (
        <Animated.View style={styles.container} entering={ SlideInDown.duration(500)} exiting={BounceOutDown.duration(500)}>
            <View style={styles.header}>
                <Text style={styles.label}>{quantity} produtos em falta</Text>
                <MaterialIcons name="close" size={24} onPress={onClear} color={theme.colors.gray_400}/>
            </View>
            <Button title="Lista de compras" onPress={listAll}/>
        </Animated.View>
    )
}