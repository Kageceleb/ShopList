import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { router, useLocalSearchParams } from "expo-router";
import { ItemList } from "@/components/ItemList";
import { services } from "@/services";

export default function List() {

    const params = useLocalSearchParams< {productsIds: string}>()
    const productsIds = params.productsIds.split(",")

    const [products, setProducts] = useState<ProductResponse[]>([])
    useEffect(()=> {
        services.products.findByIds(productsIds).then(setProducts)
    },[])
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <MaterialIcons
                    name="arrow-back"
                    size={32}
                    onPress={() => router.back()}
                />
                <Text style={styles.title}>Lista de compras:</Text>

            </View>
            <FlatList
                    data={products}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => (
                        <ItemList
                            name={item.name }
                            image={`${services.storage.imagePath}/${item.image}`}
                        />)}
                />
        </View>)
}
