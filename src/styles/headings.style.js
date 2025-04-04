import { StyleSheet } from "react-native";
import { theme } from "../constants/theme";
import { Roboto_700Bold } from "@expo-google-fonts/roboto";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: theme.sizes.small + 2,
    marginTop: theme.sizes.medium,
  },
  headerTitle: {
    fontSize: theme.sizes.xLarge - 4,
    fontFamily: "Roboto_700Bold",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default styles;
