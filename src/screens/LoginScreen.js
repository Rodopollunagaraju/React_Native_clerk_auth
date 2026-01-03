import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useState } from 'react';
import { useSignIn } from '@clerk/clerk-expo';
import { useOAuth } from '@clerk/clerk-expo';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  const { signIn, setActive, isLoaded } = useSignIn();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });
  const handleGoogleLogin = async () => {
    try {
      const { createdSessionId, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        await setActive({ session: createdSessionId });
      }
    } catch (err) {
      Alert.alert('Google login failed');
      console.log(err);
    }
  };

  const handleLogin = async () => {
    if (!isLoaded) return;

    if (!email || !password) {
      Alert.alert('Missing fields', 'Please enter email and password');
      return;
    }

    try {
      setLoading(true);

      const result = await signIn.create({
        identifier: email,
        password,
      });

      await setActive({ session: result.createdSessionId });

    } catch (err) {
      console.log('FULL SIGNUP ERROR:', JSON.stringify(err, null, 2));

      Alert.alert(
        'Signup failed',
        err?.errors?.[0]?.message ||
        err?.message ||
        'Unknown error (check console)'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome back</Text>
      <Text style={styles.subtitle}>Login to continue</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#999"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity
        style={[styles.loginButton, loading && { opacity: 0.7 }]}
        onPress={handleLogin}
        disabled={loading}
      >
        <Text style={styles.loginButtonText}>
          {loading ? 'Logging in...' : 'Login'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.loginButton, { backgroundColor: '#fff', borderWidth: 1 }]}
        onPress={handleGoogleLogin}
        disabled={loading}
      >
        <Text style={[styles.loginButtonText, { color: '#000' }]}>
          {loading ? 'Signing in...' : 'Continue with Google'}
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#111',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#e5e5e5',
    borderRadius: 10,
    paddingHorizontal: 14,
    fontSize: 16,
    marginBottom: 16,
  },
  loginButton: {
    backgroundColor: '#000',
    height: 48,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
