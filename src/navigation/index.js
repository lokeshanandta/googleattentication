import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SigninScreen from '../signIn';
import  NewUser from './../new registerscreen/index'
import Map from '../map';

const Stack = createStackNavigator()
 
function Navi () {
return(

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={SigninScreen} />
         <Stack.Screen name="NewUser" component={NewUser} />
         {/* <Stack.Screen name="Map" component={Map} /> */}
      </Stack.Navigator>
    </NavigationContainer>
)

}
export default Navi