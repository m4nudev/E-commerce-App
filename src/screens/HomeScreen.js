import { StyleSheet, Text, View } from "react-native";
import React from "react";
import WelcomeView from "./src/components/WelcomeComponent";
import HomeCarouselComponent from "./src/components/HomeCarouselComponent";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <WelcomeView />
      <HomeCarouselComponent />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
