import { View, Text, Pressable, Image, StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function GettingStartedScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      <View style={styles.content}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/adaptive-icon.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {/* Title */}
        <Text style={styles.title}>
          Learn{'\n'}
          <Text style={styles.titleAccent}>Smarter.</Text>
        </Text>
        
        {/* Description */}
        <Text style={styles.description}>
          The AI-powered companion that transforms your notes into interactive study tools.
        </Text>

        {/* Button */}
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed
          ]}
          onPress={() => {
            console.log('🔥 Button clicked!');
            router.push('/(onboarding)/login');
          }}
        >
          <Text style={styles.buttonText}>Get Started</Text>
          <Ionicons name="arrow-forward" size={20} color="white" />
        </Pressable>

        {/* Footer */}
        <Text style={styles.footer}>
          Free and open source
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  logoContainer: {
    marginBottom: 32,
  },
  logo: {
    width: 120,
    height: 120,
  },
  title: {
    textAlign: 'center',
    fontSize: 36,
    fontWeight: '900',
    color: '#0f172a',
    marginBottom: 16,
    lineHeight: 42,
  },
  titleAccent: {
    color: '#f97316',
  },
  description: {
    textAlign: 'center',
    fontSize: 16,
    color: '#64748b',
    fontWeight: '500',
    marginBottom: 40,
    paddingHorizontal: 24,
    lineHeight: 24,
  },
  button: {
    width: '100%',
    height: 56,
    backgroundColor: '#f97316',
    borderRadius: 28,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#f97316',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 8,
  },
  footer: {
    textAlign: 'center',
    fontSize: 12,
    color: '#cbd5e1',
    fontWeight: '500',
    marginTop: 32,
  },
});
