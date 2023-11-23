import React, { useEffect, useRef } from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import Routes from "./Routes";

function App(): JSX.Element {
    return (
        <NavigationContainer>
            <SafeAreaProvider>
                <IconRegistry icons={EvaIconsPack} />
                <ApplicationProvider {...eva} theme={eva.light}>
                    <Routes />
                </ApplicationProvider>
            </SafeAreaProvider>
        </NavigationContainer>
    );
}

export default App;
