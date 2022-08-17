import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  Pressable,
} from "react-native";
import Input from "./Components/Input";

import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DataPage from "./Components/DataPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        {/* <Text style={styles.title}>Form</Text> */}
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Input}
            options={{ title: "Form" }}
          />
          <Stack.Screen
            name="Data"
            options={{ title: "Form-Data" }}
            component={DataPage}
          />
        </Stack.Navigator>
        {/* <Pressable style={styles.button}>
          <Text style={styles.text}>Show Data</Text>
        </Pressable> */}
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAEBED",
    padding: 40,
  },
  title: {
    fontSize: 28,
    marginTop: 20,
    fontWeight: "500",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "white",
    width: "100%",
    marginTop: 15,
    borderColor: "black",
    borderWidth: 1,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
});
