import React from "react";
import { StyleSheet, Text, View } from "react-native";
const blue = "#3777f0";
const grey = "lightgray";
const Messages = ({ message }) => {
  const myID = "u1";
  const isMe = message.user.id === myID;
  return (
    <View
      style={[
        styles.container,
        isMe ? styles.rightContainer : styles.leftContainer,
      ]}
    >
      <Text style={[styles.text, { color: isMe ? "black" : "white" }]}>
        {message.content}
      </Text>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    maxWidth: "70%",
  },
  text: {},
  leftContainer: {
    backgroundColor: blue,
    marginLeft: 10,
    marginRight: "auto",
  },
  rightContainer: {
    backgroundColor: grey,
    marginLeft: "auto",
    marginRight: 10,
  },
});
