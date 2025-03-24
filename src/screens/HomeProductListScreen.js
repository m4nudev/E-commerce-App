import { StyleSheet, Text, View } from "react-native";
import React from "react";
import fetchHomeProduct from "../hooks/fetchHomeProduct";
import ProductCardComponent from "../components/ProductCardComponent";
import LottieView from "lottie-react-native";

const HomeProductListScreen = () => {
  const { isLoading, data, error } = fetchHomeProduct();

  return (
    <View>
      {isLoading ? (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <LottieView
            source={require("../../assets/jsons/animation.json")}
            autoPlay
            style={{ width: 300, height: 300 }}
            loop
          />
        </View>
      ) : error ? (
        <Text>We have error</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ProductCardComponent item={item} />}
          numColumns={2}
        />
      )}
    </View>
  );
};

export default HomeProductListScreen;

const styles = StyleSheet.create({});
