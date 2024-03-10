import { Text, View } from "react-native";
import {styles} from "./styles"


export default function Index() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Escolha os produtos </Text>
            <Text style={styles.subTitle}>ou remova o que já comprou </Text>
        </View>
    )
    
}