import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useUser, useAuth } from '@clerk/clerk-expo';

export default function ProfileScreen({ navigation }) {
  const { user, isLoaded } = useUser();
  const { signOut } = useAuth();

  if (!isLoaded) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>

      {/* Profile Card */}
      <View style={styles.card}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={32} color="#fff" />
        </View>

        <Text style={styles.name}>
          {user.fullName || user.username || 'No name'}
        </Text>

        <Text style={styles.email}>
          {user.primaryEmailAddress?.emailAddress}
        </Text>

        <View style={styles.divider} />

        <View style={styles.row}>
          <Text style={styles.label}>User ID</Text>
          <Text style={styles.value}>
            {user.id.slice(0, 8)}...
          </Text>
        </View>
      </View>

      {/* Logout */}
      <TouchableOpacity
        style={[styles.btn, { backgroundColor: '#dcd7e3ff' }]}
        onPress={async () => {
          await signOut();
          Alert.alert('Logged out successfully session ended');
        }}
      >
        <Text style={[styles.btnText, { color: '#1b0505ff' }]}>
          Logout
        </Text>
      </TouchableOpacity>

      {/* Bottom Menu */}
      <View style={styles.bottomMenu}>
        <TouchableOpacity
          style={styles.profileButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="home" size={28} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 40,
  },

  text: {
    fontSize: 22,
    fontWeight: '600',
    marginTop: 20,
  },

  /* Profile Card */
  card: {
    width: '90%',
    backgroundColor: '#f9f9f9',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
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
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },

  name: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111',
  },

  email: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },

  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#e5e5e5',
    marginVertical: 12,
  },

  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  label: {
    fontSize: 14,
    color: '#888',
  },

  value: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111',
  },

  /* Bottom Menu */
  bottomMenu: {
    height: 70,
    width: '100%',
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
});
