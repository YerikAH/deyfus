import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackParamList, RoutesApp} from '@/navigation/routes.ts';

import {Intro, Login, RecoverPassword, Register} from '@/pages';
import BootSplash from 'react-native-bootsplash';
import TabNavigator from '../tab-navigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

const screenOptions = {
  headerShown: false,
};

export default function AppNavigator() {
  return (
    <NavigationContainer
      onReady={() => {
        BootSplash.hide();
      }}>
      <Stack.Navigator
        screenOptions={screenOptions}
        initialRouteName={RoutesApp.Intro}>
        <Stack.Screen name={RoutesApp.Intro} component={Intro} />
        <Stack.Screen
          name={RoutesApp.RecoverPassword}
          component={RecoverPassword}
        />
        <Stack.Screen name={RoutesApp.Register} component={Register} />
        <Stack.Screen name={RoutesApp.Login} component={Login} />
        <Stack.Screen name={RoutesApp.Tabs} component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
