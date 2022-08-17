import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  Button,
  Alert,
  Pressable,
  View,
} from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";

const Input = ({ navigation }) => {
  const initialValues = {
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
  };
  const [focus, setFocus] = useState(false);
  const [formData, setFormData] = useState(initialValues);
  const postData = async () => {
    await fetch("http://localhost:5000/api/Data", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(async (response) => {
        const isJson = response.headers
          .get("content-type")
          ?.includes("application/json");
        const data = isJson && (await response.json());

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response status
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };
  // const [firstName, setfirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  const handleMultiInput = (newText, name) => {
    setFormData({ ...formData, [name]: newText });
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.label}>
        <Text>Name of the Village</Text>
      </View>
      <TextInput
        style={styles.input}
        onChange={(e) => handleMultiInput(e.target.value, "Question1")}
      // value={formData}
      />
      <View style={styles.label}>
        <Text>
          Is there any story behind the origin of the community/ village? if yes
          please share with us
        </Text>
      </View>
      <TextInput
        multiline
        numberOfLines={4}
        style={styles.inputMultiliner}
        onChange={(e) => handleMultiInput(e.target.value, "Question2")}
        // value={formData}
        name="2"
      />

      <View style={styles.label}>
        <Text>What is the genealogical / ancestry of this village?</Text>
      </View>
      <TextInput
        multiline
        numberOfLines={4}
        style={styles.inputMultiliner}
        onChange={(e) => handleMultiInput(e.target.value, "Question3")}
        // value={lastName}
        name="3"
      />

      <View style={styles.label}>
        <Text>
          Please give names of some of the important/notable people associated
          with the village and their generation, year, legend (line = path =
          branch of the tree).
        </Text>
      </View>
      <TextInput
        multiline
        name="4"
        numberOfLines={4}
        style={styles.inputMultiliner}
        onChange={(e) => handleMultiInput(e.target.value, "Question4")}
      // value={lastName}
      />

      <View style={styles.label}>
        <Text>
          Please also provide the name of their spouse, father-mother,
          grand-father-mother
        </Text>
      </View>
      <TextInput
        multiline
        name="5"
        numberOfLines={2}
        style={styles.inputMultiliner}
        onChange={(e) => handleMultiInput(e.target.value, "Question5")}
      // value={lastName}
      />

      <Pressable
        style={styles.button}
        onPress={() => {
          postData();
          navigation.navigate("Data");
        }}
      >
        <Text style={styles.text}>Submit</Text>
      </Pressable>
      {/* <Text>{firstName + lastName}</Text> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    alignItems: "center",
    // marginTop: 15,
    padding: 10,
    backgroundColor: "rgb(255, 255, 255)",
    borderBottomColor: "rgb(216, 216, 216)",
    boxShadow: "rgb(216 216 216) 0px 0px 0px",
  },
  input: {
    height: 40,
    width: "100%",
    margin: 12,
    // borderWidth: 1,
    padding: 10,
    // borderRadius: 5,
    // border: "none",
    borderBottomWidth: 1,
  },
  inputFocus: {
    borderWidth: 0,
  },
  inputMultiliner: {
    marginBottom: 10,
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
    width: "100%",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    width: "100%",
    marginTop: 15,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  label: {
    width: "100%",
  },
});

export default Input;
