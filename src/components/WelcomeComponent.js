import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { Feather, Ionicons } from "@expo/vector-icons";
import { theme } from "../constants/theme";
import styles from "../styles/welcome.style";

const WelcomeView = () => {
  return (
    <View>
      <View>
        <Text style={styles.welcomeTxt(theme.colors.black, 70)}>
          Find The Most
        </Text>
        <Text style={styles.welcomeTxt(theme.colors.primary, 0)}>
          Luxurious Furniture
        </Text>
      </View>
      <View style={styles.searchContainer}>
        <TouchableOpacity
          onPress={() => {
            console.log("I am tapped");
          }}
        >
          <Feather name="search" size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            placeholder="What are you looking for?"
            style={styles.searchInput}
          />
        </View>
        <View style={styles.searchButton}>
          <Ionicons
            name="camera-outline"
            size={36}
            color={theme.colors.offWhite}
          />
        </View>
      </View>
    </View>
  );
};

export default WelcomeView;
