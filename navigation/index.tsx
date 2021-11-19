import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import {
  ColorSchemeName,
  Pressable,
  Text,
  View,
  Image,
  useWindowDimensions,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import TabOneScreen from "../screens/HomeScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import ChatRoomScreen from "../screens/ChatRoomScreen";
import Homescreen from "../screens/HomeScreen";
export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const HomeHeader = (props) => {
    const { width } = useWindowDimensions();
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width,
          padding: 10,
          alignItems: "center",
        }}
      >
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1637188610523-03534233a672?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
          style={{
            width: 30,
            height: 30,
            borderRadius: 30,
          }}
        />
        <Text
          style={{
            flex: 1,
            textAlign: "center",
            marginLeft: 50,
            fontWeight: "bold",
          }}
        >
          home
        </Text>

        <Feather
          name="camera"
          size={24}
          color="black"
          style={{ marginHorizontal: 10 }}
        />
        <Feather
          name="edit-2"
          size={24}
          color="black"
          style={{ marginHorizontal: 10 }}
        />
      </View>
    );
  };

  const ChatHeader = (props) => {
    const { width } = useWindowDimensions();
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: width - 50,
          marginLeft: 25,
          padding: 10,
          alignItems: "center",
        }}
      >
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1637188610523-03534233a672?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
          style={{
            width: 30,
            height: 30,
            borderRadius: 30,
          }}
        />
        <Text
          style={{
            flex: 1,
            marginLeft: 10,
            fontWeight: "bold",
          }}
        >
          {props.children}
        </Text>

        <Feather
          name="camera"
          size={24}
          color="black"
          style={{ marginHorizontal: 10 }}
        />
        <Feather
          name="edit-2"
          size={24}
          color="black"
          style={{ marginHorizontal: 10 }}
        />
      </View>
    );
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={Homescreen}
        options={{ headerTitle: HomeHeader }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />

      <Stack.Screen
        name="ChatRoom"
        component={ChatRoomScreen}
        options={{ headerTitle: ChatHeader, headerBackTitleVisible: false }}
      />

      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
