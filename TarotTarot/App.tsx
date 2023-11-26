import React, { useEffect, useRef } from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistedStore } from "./src/library/redux/ReduxStore";
import Routes from "./Routes";
import { GestureHandlerRootView } from "react-native-gesture-handler";

function App(): JSX.Element {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistedStore}>
                <NavigationContainer>
                    <SafeAreaProvider>
                        <IconRegistry icons={EvaIconsPack} />
                        <ApplicationProvider {...eva} theme={eva.light}>
                            <GestureHandlerRootView style={{ flex: 1 }}>
                                <Routes />
                            </GestureHandlerRootView>
                        </ApplicationProvider>
                    </SafeAreaProvider>
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
}

export default App;
