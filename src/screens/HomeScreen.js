import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.appName}>ProfileX</Text>
      </View>

      <ImageBackground
        source={require('../../assets/home.jpg')}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.middle}>
          <Text style={styles.welcomeText}>Welcome to the Home Screen</Text>
        </View>
      </ImageBackground>

      <View style={styles.bottomMenu}>
        <TouchableOpacity
          style={styles.profileButton}
          onPress={() => navigation.navigate('Profile')}
        >
          <Ionicons name="person" size={28} color="#fff" />
          
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  top: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingTop: 20,
    marginTop: 10,
  },
  appName: {
    fontSize: 22,
    fontWeight: '600',
  },

//middle should be little up
  middle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -200,

  },
  welcomeText: {
    fontSize: 25,
    color: '#fcfc06ff',
  },


  bottomMenu: {
    height: 70,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
    marginBottom: 10,
  },
  profileButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileButtonText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
