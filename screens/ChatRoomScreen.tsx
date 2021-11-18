import React from "react";
import { StyleSheet, SafeAreaView, FlatList } from "react-native";
import Messages from "../components/messages";
import ChatRoomData from "../assets/dummy-data/Chats";
import Messageinput from "../components/messageinput";

const ChatRoomScreen = () => {
  return (
    <SafeAreaView style={styles.page}>
      <FlatList
        data={ChatRoomData.messages}
        inverted
        renderItem={({ item }) => <Messages message={item} />}
      />
    <Messageinput/>
    </SafeAreaView>
  );
};

export default ChatRoomScreen;

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
  },
});
