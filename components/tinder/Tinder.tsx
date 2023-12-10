import React from "react";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, Image, Modal, StyleSheet, Text, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

const Tinder = () => {
	const [open, setOpen] = useState(false);
	const navigation = useNavigation();
	const route = useRoute();
	return (
		<>
			<View style={styles.container}>
				<Text style={styles.text}>Tinder 2</Text>
				<Text style={styles.text2}>*alguma frase romantica* </Text>
				<Text style={styles.text2}>aceitas ? </Text>
				<StatusBar style="auto" />
				<View style={styles.cont}>
					<Button title="SIM" color="black" onPress={() => setOpen(true)} />
					<Button
						title="NAO"
						color="black"
						onPress={() => navigation.navigate("Bomba")}
					/>
				</View>
			</View>
			<Modal visible={open} onRequestClose={() => setOpen(false)}>
				<View>
					<Image
						style={styles.image}
						source={require("../../assets/poze.jpg")}
					/>
					<Button
						title="ainda cria"
						color="black"
						onPress={() => setOpen(false)}
					/>
				</View>
			</Modal>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "red",
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		fontSize: 50,
	},
	text2: {
		color: "white",
		fontSize: 40,
		width: 200,
	},
	cont: {
		flexDirection: "row",
		gap: 6,
	},
	image: {
		height: 400,
		width: "auto",
		marginBottom: 50,
	},
});

export default Tinder;

/*
Stack -> pilha de rotas
	navigation 
		navigate -> ve se tem a rota, se nao tiver cria a rota e vai para ela
		push -> cria nova screen e vai pra essa screen
		popToTop -> vai pra primeira tela da stack
*/
