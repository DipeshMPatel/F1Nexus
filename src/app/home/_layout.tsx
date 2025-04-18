import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import { ActivityIndicator, Button, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import { getAuth, signOut } from "firebase/auth";
import ApolloClientProvider from "../../providers/ApolloClientProvider";
import { Colors } from "../../Constants/Colors";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "F1-Black": require("../../../assets/fonts/Formula1-Black.ttf"),
    "F1-Bold": require("../../../assets/fonts/Formula1-Bold_web.ttf"),
    "F1-Italic": require("../../../assets/fonts/Formula1-Italic.ttf"),
    "F1-Regular": require("../../../assets/fonts/Formula1-Regular-1.ttf"),
    "F1-Wide": require("../../../assets/fonts/Formula1-Wide.ttf"),
  });

  const auth = getAuth();
  const router = useRouter(); // Use router for navigation

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out");
      Alert.alert("Success", "You have been logged out.");
      router.replace("/auth/login"); // Redirect to login screen
    } catch (error) {
      console.error("Logout failed:", error);
      Alert.alert("Error", "Failed to log out. Please try again.");
    }
  };

  return (
    <ApolloClientProvider>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: Colors.primary },
          headerTitleStyle: { color: "white", fontFamily: "F1-Bold" },
          headerTintColor: "white",
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: "Racing",
            headerRight: () => (
              <Button title="Logout" color="orange" onPress={handleLogout} />
            ),
          }}
        />
      </Stack>
      <StatusBar style="light" />
    </ApolloClientProvider>
  );
}
