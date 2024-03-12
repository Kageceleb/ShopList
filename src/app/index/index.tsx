import { useState, useEffect } from "react";
import { Alert, ScrollView, Text, View } from "react-native";
import { router } from "expo-router";
import { styles } from "./styles"
import { Product } from "@/components/Product";
import { Selected } from "@/components/Selected";
import { services } from "@/services";


export default function Index() {
    const [selected, setSelected] = useState<string[]>([])
    const [products, setProducts] = useState<ProductResponse[]>([])

    function handleToggleSelected(value: string) {
        if (selected.includes(value)) {
            console.log(selected)
            return setSelected((state) => state.filter((item) => item !== value))
        }
        setSelected((state) => [...state, value])
        console.log(selected)
    }
    function handleClear(){
        Alert.alert("Limpar", "deseja limpar tudo?", [
            {text: "Não", style: "cancel"},
            {text: "Sim", onPress: () => setSelected([])},
        ])
    }
    function handleList(){
        router.navigate("/list/"+ selected)
    }

    useEffect(()=> {
        services.products.findAll().then(setProducts)
    },[])
    return (


        <View style={styles.container}>
            <Text style={styles.title}>
                Escolha{"\n"}

                <Text style={styles.subTitle} >os produtos</Text>
            </Text>
            <Text style={styles.message}>ou remova o que já comprou </Text>
            <ScrollView contentContainerStyle={styles.product} showsVerticalScrollIndicator={false}>
                {products.map((item) => (
                    <Product
                        key={item.id}
                        name={String(item.name)}
                        image={`${services.storage.imagePath}/${item.image}`}
                        selected = {selected.includes(item.id)}
                        onPress={() => handleToggleSelected(item.id)} />

                ))}
            </ScrollView>
           {selected.length > 0 && (<Selected 
            quantity={selected.length} 
            onClear={handleClear} 
            listAll={handleList}/>
)}
        </View>
    )

}