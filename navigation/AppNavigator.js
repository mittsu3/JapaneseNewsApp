import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import ArticleScreen from "../screens/ArticleScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ClipScreen from "../screens/ClipScreen";
import { FontAwesome } from "@expo/vector-icons";
import AnimationScreen from "../screens/AnimationScreen";
import GameScreen from "../screens/GameScreen";
import CoronaScreen from "../screens/CoronaScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();

const GameStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Game"
        component={GameScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Article" component={ArticleScreen} />
    </Stack.Navigator>
  );
};
const CoronaStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Corona"
        component={CoronaScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Article" component={ArticleScreen} />
    </Stack.Navigator>
  );
};

const AnimeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Anime"
        component={AnimationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Article" component={ArticleScreen} />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Article" component={ArticleScreen} />
    </Stack.Navigator>
  );
};

const ClipStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Clip" component={ClipScreen} />
      <Stack.Screen name="Article" component={ArticleScreen} />
    </Stack.Navigator>
  );
};

const screenOption = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    let iconName;

    if (route.name === "Home") {
      iconName = "home";
    } else if (route.name === "Clip") {
      iconName = "bookmark";
    } else if (route.name === "Anime") {
      iconName = "tv";
    } else if (route.name === "Game") {
      iconName = "gamepad";
    } else if (route.name === "Corona") {
      iconName = "certificate";
    }
    return <FontAwesome name={iconName} size={size} color={color} />;
  }
});

export default AppNavigator = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={screenOption}>
          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen name="Anime" component={AnimeStack} />
          <Tab.Screen name="Game" component={GameStack} />
          <Tab.Screen name="Corona" component={CoronaStack} />
          <Tab.Screen name="Clip" component={ClipStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
