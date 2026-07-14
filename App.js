import React, { useEffect, useState, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { Text, TextInput } from 'react-native';

import TabuuMenu from './screens/tabuuMenu';
import NewGame from './screens/NewGame';
import Game from './screens/Game';
import FinalResults from './screens/FinalResults';
import Scores from './screens/Scores';
import MyWords from './screens/MyWords';
import Settings from './screens/Settings';
import Help from './screens/help';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import { supabase } from './utils/supabase';

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [session, setSession] = useState(null);

  const [fontsLoaded] = useFonts({});

  useEffect(() => {
    async function prepare() {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        setSession(session);

        const { data: authListener } = supabase.auth.onAuthStateChange(
          (_event, currentSession) => {
            setSession(currentSession);
          }
        );

        return () => {
          authListener.unsubscribe();
        };
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {session ? (
          // Kullanıcı oturum açmış
          <Stack.Group>
            <Stack.Screen name="TabuuMenu" component={TabuuMenu} />
            <Stack.Screen name="NewGame" component={NewGame} />
            <Stack.Screen name="Game" component={Game} />
            <Stack.Screen name="FinalResults" component={FinalResults} />
            <Stack.Screen name="Scores" component={Scores} />
            <Stack.Screen name="MyWords" component={MyWords} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Help" component={Help} />
          </Stack.Group>
        ) : (
          // Kullanıcı oturum açmamış
          <Stack.Group>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
