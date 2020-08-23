import 'react-native-gesture-handler'; 
import { StatusBar } from 'expo-status-bar';
import React, {Fragment} from 'react';
import {useFonts, Assistant_400Regular, Assistant_600SemiBold} from '@expo-google-fonts/assistant'
import Routes from './src/rotas';
import { AppLoading} from 'expo';


export default function App() {
	let [fontsLoaded] = useFonts ({
		Assistant_400Regular,
		Assistant_600SemiBold

	});

	if(!fontsLoaded){
		return <AppLoading />
	} 
  return (
    <>
      <StatusBar style="auto" />
      <Routes/>
    </>
  );


}


