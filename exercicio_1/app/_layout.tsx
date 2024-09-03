import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="index"/>
      <Stack.Screen name="home"/>
      <Stack.Screen name="page/index"/>
    </Stack>
  );
}
