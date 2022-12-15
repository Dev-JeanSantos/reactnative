import {StatusBar, SafeAreaView,  } from 'react-native';
import { useCallback, useEffect } from 'react';
import Cesta from './src/telas/cesta';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from "@expo-google-fonts/montserrat";
import mock from "./src/mocks/cesta"
import * as SplashScreen from 'expo-splash-screen';

export default function App() {

  const[fonteCarregadas] = useFonts({
    "MontSerratRegular": Montserrat_400Regular,
    "MonteSerratBold": Montserrat_700Bold
});

useEffect(() => {
  async function prepare(){
    try{
      await SplashScreen.preventAutoHideAsync();
    }catch(e){
      console.warn(e)
    }
  }
  prepare();
}, []);

const onLayoutRootView = useCallback(async() => {
  if (fonteCarregadas){
    await SplashScreen.hideAsync();
  }
}, [fonteCarregadas]);

if(!fonteCarregadas){
  return null;
}

  return (
    <SafeAreaView style={{flex:1}} onLayout = {onLayoutRootView}>
      <StatusBar/>
      <Cesta {...mock} />
    </SafeAreaView>
  );
}


