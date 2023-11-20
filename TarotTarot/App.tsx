/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import * as eva from '@eva-design/eva'
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components'
import StyledButton from './src/design/Button';
import { ButtonSize } from './src/design/button/ButtonInterface';
import { Screen } from './src/design/Layout';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { NavigationPropEnum } from './src/design/layout/LayoutInterface';
import { EvaIconsPack } from '@ui-kitten/eva-icons';



function App(): JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>
            <Screen title="하나둘셋넷" navigationLeftProp={NavigationPropEnum.back}>
              <StyledButton disabled={false} text={"Testeasdfasdfasdf"} size={ButtonSize.M}/>
            </Screen>
          </ApplicationProvider>
      </SafeAreaProvider>
    </NavigationContainer>    
  )
}


export default App;
