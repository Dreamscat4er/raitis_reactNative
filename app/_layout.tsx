import { Stack } from "expo-router";

const RootLayout = () => {
    return <Stack>
        <Stack.Screen name="index" options={{
            headerTitle: "Home Page"
        }}/>
        <Stack.Screen name="mainMap" options={{
            headerTitle: "Map"
        }}/>
        <Stack.Screen name="signUp" options={{
            headerTitle: "signUp"
        }}/>
    </Stack>
};
export default RootLayout;