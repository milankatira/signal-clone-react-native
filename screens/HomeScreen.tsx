import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import ChatRoomItem from "../components/ChatRoomItem";
import ChatRoomsData from "../assets/dummy-data/ChatRooms";

const chatRoom1 = ChatRoomsData[0];
const chatRoom2 = ChatRoomsData[1];
const TabOneScreen = () => {
  return (
    <View style={styles.page}>
      <FlatList

        data={ChatRoomsData}
        renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default TabOneScreen;

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    flex: 1,
  },
});
