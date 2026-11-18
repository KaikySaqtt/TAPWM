import { StyleSheet, Text, View } from "react-native";
export default function Header({ title }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: "#00008b",
        alignItems: "center",
        width: "100%",
        paddingTop: 20, // ALTERADO: espaço superior
        paddingBottom: 20, // ALTERADO: espaço inferior
        marginTop: 60, // Cria espaço abaixo do Header
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#FFFFFF",
    },
})