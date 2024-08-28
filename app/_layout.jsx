import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SplashScreen, Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

const MainLayout = () =>{
    
        const [fontsLoaded, error] = useFonts({
            "RobotoSlab-Light": require("../assets/fonts/RobotoSlab-Light.ttf"),
            "RobotoSlab-Thin": require("../assets/fonts/RobotoSlab-Thin.ttf"),
            "RobotoSlab-Regular": require("../assets/fonts/RobotoSlab-Regular.ttf"),
            "RobotoSlab-Bold": require("../assets/fonts/RobotoSlab-Bold.ttf"),
          });
          
          useEffect(() => {
            if (error) throw error;
          
            if (fontsLoaded) {
              SplashScreen.hideAsync();
            }
          }, [fontsLoaded, error]);
          
          if (!fontsLoaded && !error) {
            return null;
          }
          
        
      return (
        <Stack>
        |  <Stack.Screen name = 'index' options = {{headerShown:false}}/>
        </Stack>
    )
}

export default MainLayout