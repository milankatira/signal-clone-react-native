import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Messages from "../components/messages";
import ChatRoomData from "../assets/dummy-data/Chats";

const ChatRoomScreen = () => {
  return (
    <View style={styles.page}>
      <FlatList
        data={ChatRoomData.messages}
        inverted
        renderItem={({ item }) => <Messages message={item} />
      }
      />
      <Messages message={ChatRoomData.messages[0]} />
    </View>
  );
};

export default ChatRoomScreen;

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
  },
});
