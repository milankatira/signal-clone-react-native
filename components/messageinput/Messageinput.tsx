import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Pressable,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import messages from "../messages";

const Messageinput = () => {
  const [message, setMessage] = useState("");

  const sendMessage = () => {

  };

  const onPlusClicked = () => {

  };
  const onPress = () => {
    if (message) {
      sendMessage();
    } else {
      onPlusClicked();
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.root}
      keyboardVerticalOffset={100}
    >
      <View style={styles.inputContainer}>
        <Feather name="smile" size={24} color="gray" style={styles.icon} />
        <TextInput
          style={styles.input}
          value={message}
          placeholder="signal message..."
          onChangeText={setMessage}
        />
        <Feather name="camera" size={24} color="grey" style={styles.icon} />
        <Feather name="mic" size={24} color="gray" style={styles.icon} />
      </View>

      <Pressable onPress={onPress} style={styles.buttonContainer}>
        {message ? (
          <Feather name="send" size={24} color="white" style={styles.icon} />
        ) : (
          <Feather name="plus" size={24} color="white" style={styles.icon} />
        )}
      </Pressable>
    </KeyboardAvoidingView>
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
  },
  buttonContainer: {
    width: 40,
    height: 40,
    backgroundColor: "#3777f0",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 35,
  },
});
