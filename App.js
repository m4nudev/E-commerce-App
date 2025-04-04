import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import ProductList from "./src/screens/ProductListScreen";
import * as SplashScreen from "expo-splash-screen";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { useCallback } from "react";
import BottomTabs from "./src/screens/BottomTabs";
import ProductDetail from "./src/screens/ProductDetail";

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    console.log("Fonts not loaded");
    return null;
  } else {
    console.log("Fonts are loaded");
  }

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Stack.Navigator
        screenOptions={{
          tabBarStyle: {
            position: "absolute",
            bottom: 0,
            right: 0,
            left: 0,
            elevation: 0,
            height: 70,
          },
        }}
      >
        <Stack.Screen
          name="BottomTabs"
          component={BottomTabs}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="ProductList" component={ProductList} />
        <Stack.Screen name="product_detail" component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
