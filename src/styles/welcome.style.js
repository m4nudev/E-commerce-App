import { StyleSheet } from "react-native";
import { theme } from "../constants/theme";

const styles = StyleSheet.create({
  searchWrapper: {
    flex: 1,
    backgroundColor: theme.colors.secondary,
    borderRadius: theme.sizes.small,
    marginRight: theme.sizes.small,
  },
  searchButton: {
    width: 50,
    backgroundColor: theme.colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: theme.sizes.medium,
  },
  welcomeTxt: (color, top) => ({
    fontSize: theme.sizes.xxlarge - 6,
    color: color,
    marginTop: top,
    marginHorizontal: theme.sizes.small,
  }),
  searchIcon: {
    marginTop: theme.sizes.small,
    color: theme.colors.gray,
    marginHorizontal: theme.sizes.xSmall,
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    height: 50,
    marginHorizontal: theme.sizes.small,
    backgroundColor: theme.colors.secondary,
    borderRadius: theme.sizes.medium,
    marginVertical: theme.sizes.medium,
  },
  searchInput: {
    width: "100%",
    height: "100%",
    paddingHorizontal: theme.sizes.small,
  },
});

export default styles;
