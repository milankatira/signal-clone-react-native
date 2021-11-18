import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import { Feather } from '@expo/vector-icons';

const Messageinput = () => {
  return (
    <View style={styles.root}>
      <View style={styles.inputContainer}>
      <Feather name="smile" size={24} color="gray" style={styles.icon} />
        <TextInput style={styles.input} />
        <Feather name="camera" size={24} color="grey" style={styles.icon} />
        <Feather name="mic" size={24} color="gray" style={styles.icon} />
      </View>

      <View style={styles.buttonContainer}> 
      <Feather name="plus" size={24} color="white" style={styles.icon}  />
      </View>
    </View>
  );
};

export default Messageinput;

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    padding: 10,
  },
  input: {
    flex: 1,
    marginHorizontal: 5,
  },
  icon: {
    marginHorizontal: 5,
  },
  inputContainer: {
    backgroundColor: "#f2f2f2",
    flex: 1,
    marginRight: 10,
    borderRadius: 25,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#dedede",
    alignItems: "center",
    flexDirection: "row",
    padding: 5,
  },
  buttonContainer: {
    width: 40,
    height: 40,
    backgroundColor: "#3777f0",
    borderRadius: 25,
    alignItems: 'center',
    justifyContent:'center'
  },
  buttonText: {
    color: "white",
    fontSize: 35,
  },
});
