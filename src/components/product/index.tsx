import { Image, Pressable,PressableProps, Text } from "react-native";

import {styles} from "./styles"

export type ProductProps = {
    name: string,
    image: string,
    selected?: boolean
}

export function Product({ name, image, selected = false, ...rest}: ProductProps & PressableProps) {
    return (
        <Pressable style={[styles.container, selected && styles.selected]} {...rest}>
            <Image style={styles.image} source={require("@/assets/apple.png")}/>
            <Text style={styles.title}>{name}</Text>
        </Pressable>
    )
}