import { Image, Text, TouchableOpacity, TouchableOpacityProps } from "react-native"
import { styles } from "./styles"

type Props = TouchableOpacityProps & {
    name: string,
    image: string
  }

export function ItemList({ name, image, ...rest }: Props) {
    return (
      <TouchableOpacity activeOpacity={0.7} style={[styles.button]} {...rest}>
        <Image style={styles.image} source={{uri: image}}/>
        <Text style={[styles.text]}>{name}</Text>
      </TouchableOpacity>
    )
  }