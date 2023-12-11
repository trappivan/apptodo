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
          <Stack.Screen
            name="Tinder"
            component={Tinder}
            options={{
              title: "Tinder",
              headerTitleAlign: "center",
              headerTransparent: true,
              headerRight: () => {
                return (
                  <Button
                    title="Abrir modal"
                    onPress={() => console.log("botaozaooo")}
                  />
                );
              },
            }}
            initialParams={{ itemId: 24, bombaTinder: "perfil do caralho" }}
          />
          <Stack.Screen
            name="Bomba"
            component={Bomba}
            options={{
              title: "Bombaada",
            }}
            initialParams={{ itemId: 24, bombaTela: "perfil da bomba" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
