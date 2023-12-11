import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Alert,
  Button,
  Image,
  Modal,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

const Tinder = () => {
  const [open, setOpen] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(
    () =>
      navigation.addListener("beforeRemove", (e) => {
        if (open) {
          // If we don't have unsaved changes, then we don't need to do anything
          return;
        }

        // Prevent default behavior of leaving the screen
        e.preventDefault();

        // Prompt the user before leaving the screen
        Alert.alert(
          "Discard changes?",
          "You have unsaved changes. Are you sure to discard them and leave the screen?",
          [
            { text: "Don't leave", style: "cancel", onPress: () => {} },
            {
              text: "Discard",
              style: "destructive",
              // If the user confirmed, then we dispatch the action we blocked earlier
              // This will continue the action that had triggered the removal of the screen
              onPress: () => navigation.dispatch(e.data.action),
            },
          ]
        );
      }),
    [navigation]
  );

  console.log(route.params);
  return (
    <>
      <View style={styles.container}>
        <Button
          title="SIM"
          color="black"
          onPress={() =>
            navigation.setOptions({
              title: "Update tinder ",
            })
          }
        />
        <Text style={styles.text}>Tinder 2</Text>
        <Text style={styles.text2}>*alguma frase romantica* </Text>
        <Text style={styles.text2}>aceitas ? </Text>
        <StatusBar style="auto" />
        <View style={styles.cont}>
          <Button title="SIM" color="black" onPress={() => setOpen(true)} />
          <Button
            title="NAO"
            color="black"
            onPress={() =>
              navigation.navigate({
                name: "Bomba",
                params: { bomba: "bomba" },
              })
            }
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
            onPress={() => {
              navigation.setParams({
                bomba: 214,
              });
              setOpen(false);
            }}
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
