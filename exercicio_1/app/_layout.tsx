import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="pagesIndex\index"/>
      <Stack.Screen name="pagesIndex/home"/>
      <Stack.Screen name="page/index"/>
    </Stack>
  );
}
