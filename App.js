import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}>Hello React Native</Text>
      <Text style={{ fontSize: 22 }}>Let's program in React Native</Text>
      <Text style={{ fontSize: 25 }}>It's cool to program in React Native</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#bbb", // GC leong 11+12 geography 11+12 politics
  },
  textContainer: {
    fontSize: 20,
  },
});
