import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignedIn, SignedOut } from '@clerk/clerk-expo';

import StartScreen from '../screens/StartScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <SignedOut>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Start" component={StartScreen} />
                    <Stack.Screen
                        name="Login"
                        component={LoginScreen}
                        options={{
                            headerShown: true,
                            title: '',
                            headerBackTitleVisible: false,
                            headerTintColor: '#000',
                            headerStyle: {
                                backgroundColor: '#fff',
                                elevation: 0,
                                shadowOpacity: 0,
                            },
                        }}
                    />
                    <Stack.Screen
                        name="Signup"
                        component={SignupScreen}
                        options={{
                            headerShown: true,
                            title: '',
                            headerBackTitleVisible: false,
                            headerTintColor: '#000',
                            headerStyle: {
                                backgroundColor: '#fff',
                                elevation: 0,
                                shadowOpacity: 0,
                            },
                        }}
                    />
                </Stack.Navigator>
            </SignedOut>
            <SignedIn>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{
                            title: 'myApp',
                            headerTitleAlign: 'center',
                        }}
                    />
                    <Stack.Screen
                        name="Profile"
                        component={ProfileScreen}
                        options={{
                            title: 'Profile',
                        }}
                    />

                </Stack.Navigator>
            </SignedIn>
        </NavigationContainer>
    );
}
