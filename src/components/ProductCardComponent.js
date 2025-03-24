import { Image, Text, View } from "react-native";
import styles from "../styles/productcard.style";

export default function ProductCardComponent({ item }) {
  return (
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={item.path} />
      <View style={styles.details}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </View>
  );
}
