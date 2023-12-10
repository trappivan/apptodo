import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, Image, Modal, StyleSheet, Text, View } from "react-native";
import Tinder from "./components/tinder/Tinder";
import Bomba from "./components/bomba/Bomba";

export default function App() {
	const Stack = createNativeStackNavigator();

	return (
		<>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Bomba">
					<Stack.Screen name="Tinder" component={Tinder} />
					<Stack.Screen name="Bomba" component={Bomba} />
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}
