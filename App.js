import { ClerkProvider } from '@clerk/clerk-expo';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <ClerkProvider publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <AppNavigator />
    </ClerkProvider>
  );
}
