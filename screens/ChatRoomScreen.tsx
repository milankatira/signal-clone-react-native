import React from "react";
import { StyleSheet, SafeAreaView, FlatList } from "react-native";
import Messages from "../components/messages";
import ChatRoomData from "../assets/dummy-data/Chats";
import Messageinput from "../components/messageinput";
import { useRoute,useNavigation } from "@react-navigation/core";

const ChatRoomScreen = () => {
  const route=useRoute();
  const navigation=useNavigation();
  navigation.setOptions({title:'milan katira'})
  console.warn(route.params?.id)
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
    flex:1
  },
});
