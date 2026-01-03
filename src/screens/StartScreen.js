import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

export default function StartScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('../../assets/bg.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.main}>
        <View style={styles.headering}>
          <Text style={styles.title}>ProfileX</Text>
          <Text style={styles.subtitle}>personal dashboard</Text>
        </View>

        <View style={styles.downsection}>
          <TouchableOpacity
            style={[styles.btn, { backgroundColor: '#000000bd' }]}
            onPress={() => navigation.navigate('Signup')}
          >
            <Text style={[styles.btnText, { color: '#ffffff' }]}>
              Create an account
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.btn, { backgroundColor: '#dcd7e3ff' }]}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={[styles.btnText, { color: '#1b0505ff' }]}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: { flex: 1 },
  main: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  headering: { marginTop: 60 },
  downsection: { marginBottom: 60 },
  title: {
    color: '#fbf704ff',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    color: '#ffff00ff',
    fontSize: 20,
    textAlign: 'center',
  },
  btn: {
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  btnText: {
    fontSize: 18,
    textAlign: 'center',
  },
});
