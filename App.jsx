import Home from "./src/pages/Home";
import Listagem from "./src/pages/Listagem";
import Login from './src/pages/Login';
import Cadastro from './src/pages/Cadastro';

import { NativeBaseProvider } from "native-base";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import LoggedContext from "./src/contexts/Logged";
import { LoggedProvider } from "./src/contexts/Logged";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
    </Stack.Navigator>
  );
}

function MainNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Listagem" component={Listagem} />
    </Tab.Navigator>
  );
}

export default function App() {

  return (
    <LoggedProvider>
    <NativeBaseProvider>
      <NavigationContainer>
      <LoggedContext.Consumer>
      {({ logged }) => (logged ? <MainNavigator /> : <AuthNavigator />)}
        </LoggedContext.Consumer>
      </NavigationContainer>
    </NativeBaseProvider>
    </LoggedProvider>
  );
}


