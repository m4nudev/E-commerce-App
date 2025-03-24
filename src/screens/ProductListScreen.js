import { SafeAreaView, FlatList, View } from "react-native";
import ProductCardComponent from "../components/ProductCardComponent";
import { useEffect, useState } from "react";
import LottieView from "lottie-react-native";

const localProductList = [
  {
    id: "1A",
    title: "Colorful furniture",
    price: "$100",
    path: require("../../assets/images/fn3.jpg"),
  },
  {
    id: "1B",
    title: "Comfy Sofa",
    price: "$200",
    path: require("../../assets/images/fn2.jpg"),
  },
  {
    id: "1C",
    title: "Beautiful home furniture",
    price: "$300",
    path: require("../../assets/images/fn1.jpg"),
  },
];

export default function ProductList() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
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

  const renderItem = ({ item }) => {
    return <ProductCardComponent item={item} />;
  };

  return (
    <SafeAreaView>
      <FlatList
        data={localProductList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        removeClippedSubview={false}
      />
    </SafeAreaView>
  );
}
