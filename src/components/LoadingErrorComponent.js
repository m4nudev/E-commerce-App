import { View, Text } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

const LoadingErrorComponent = ({ isLoading, error }) => {
  if (isLoading) {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <LottieView
          source={require("../../assets/jsons/animation.json")}
          autoPlay
          style={{ width: 300, height: 300 }}
          loop
        />
      </View>
    );
  }

  if (error) {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Text>We have a big Error</Text>
      </View>
    );
  }
  return null;
};

export default LoadingErrorComponent;
