import { ScrollView, StyleSheet, View, Text } from "react-native";
import { Link } from 'expo-router';

export default function About(){
    return(
        <ScrollView >
        <View >
            <Text >TIC</Text>            

            <Link href="/" >
            <Text  > Volver al inicio </Text>
            </Link>

        </View>
        </ScrollView>
    )
}