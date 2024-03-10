import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles"
import { Product } from "@/components/product";
import { useState } from "react";


export default function Index() {
    const [selected, setSelected] = useState<string[]>([])

    function handleToggleSelected(value: string) {
        if (selected.includes(value)) {
            console.log(selected)
            return setSelected((state) => state.filter((item) => item !== value))
        }
        setSelected((state) => [...state, value])
        console.log(selected)
    }
    return (


        <View style={styles.container}>
            <Text style={styles.title}>
                Escolha{"\n"}

                <Text style={styles.subTitle} >os produtos</Text>
            </Text>
            <Text style={styles.message}>ou remova o que já comprou </Text>
            <ScrollView contentContainerStyle={styles.product} showsVerticalScrollIndicator={false}>
                {Array.from({ length: 100 }).map((item, index) => (
                    <Product
                        key={index}
                        name={String(index)}
                        image=" "
                        selected = {selected.includes(String(index))}
                        onPress={() => handleToggleSelected(String(index))} />

                ))}
            </ScrollView>

        </View>
    )

}