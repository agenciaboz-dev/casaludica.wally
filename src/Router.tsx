import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { NativeStackNavigationOptions, createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home } from "./screens/Home"
import { GamePage } from "./screens/Game"
import { SettingsPage } from "./screens/Settings"
import { SettingsProvider } from "./contexts/settingsContext"
import { ResultsProvider } from "./contexts/resultsContext"

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = ({}) => {
    const Stack = createNativeStackNavigator()
    const navigator_options: NativeStackNavigationOptions = {
        headerStyle: {
            backgroundColor: "red",
        },
        headerTintColor: "white",
        headerTitleStyle: {
            fontWeight: "bold",
        },
        headerTitleAlign: "center",
        animation: "slide_from_right",
        headerShown: false,
    }

    const home_header_options = {
        title: "Casa Lúdica alguma coisa",
        headerShown: false,
    }

    return (
        <SettingsProvider>
            <ResultsProvider>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="home" screenOptions={navigator_options}>
                        <Stack.Screen name={"home"} component={Home} />
                        <Stack.Screen name={"settings"} component={SettingsPage} />
                        <Stack.Screen name={"game"} component={GamePage} />
                    </Stack.Navigator>
                </NavigationContainer>
            </ResultsProvider>
        </SettingsProvider>
    )
}
