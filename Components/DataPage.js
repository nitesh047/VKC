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

const DataPage = ({ navigation }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      const url = "http://localhost:5000/api/Data";
      const response = await axios.get(url);
      setData(response.data);
    };
    fetchUser();
  }, []);
  console.log(data);
  return (
    <div>
      {data.map((d) => (
        <>
          <Text>{d.Question1}</Text>
          <br></br>
          <Text>{d.Question2}</Text>
          <br></br>
          <Text>{d.Question3}</Text>
          <br></br>
          <Text>{d.Question4}</Text>
          <br></br>
          <Text>{d.Question5}</Text>
          <br></br>
        </>
      ))}
    </div>
  );
};

export default DataPage;
