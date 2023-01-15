import React, { Component } from 'react';
import { Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import AboutModal from './screens/AboutModal';



class TitleLogo extends Component {
    render() {
        return (
            <Image style={{ height: 50 }} source={require('../assets/favicon.png')} />
        )
    }
}


const Stack = createNativeStackNavigator();



export default class Router extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Home' >
                    <Stack.Screen
                        name="HomeScreen"
                        component={HomeScreen}
                        options={{
                            headerTitleAlign: 'center',
                            headerRight: () => (
                                <Button
                                    onPress={() => alert('This is a button!')}
                                    title="About"
                                    color="#acc"
                                />
                            ),

                            headerTitle: (props) => <TitleLogo {...props} />
                        }} />
                    <Stack.Screen name="DetailsScreen" component={DetailsScreen}
                        options={({ route }) => ({
                            title: route.params.title,
                            headerTitleAlign: 'center',
                            headerRight: () => (
                                <Button
                                    onPress={() => alert('This is a button!')}
                                    title="Info"
                                    color="#acc"
                                />
                            ),
                            headerTitle: (props) => <TitleLogo {...props} />
                            
                        })} />
                    <Stack.Screen name="Modal" component={AboutModal}
                        options={{ presentation: 'modal',headerShown:false, }} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}



