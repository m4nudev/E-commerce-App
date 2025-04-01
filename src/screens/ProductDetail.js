import { View, Text, Image } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import styles from "../styles/product.style";
import { RatingInput } from "react-native-stock-star-rating";

export default function ProductDetail() {
  const route = useRoute();
  const item = route.params.item;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={item.path} />
      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text>{item.title}</Text>
          <Text>{item.price}</Text>
        </View>
        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            <RatingInput 
            
            />
          </View>
        </View>
      </View>
    </View>
  );
}
