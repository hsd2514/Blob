import { View, Text, Pressable, TouchableOpacity, Image, StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function GettingStartedScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white" style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      <View className="flex-1 items-center justify-center px-8" style={styles.content}>
        {/* Logo */}
        <View className="mb-8" style={styles.logoContainer}>
          <Image
            source={require('../../assets/adaptive-icon.png')}
            className="w-32 h-32"
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {/* Title */}
        <Text className="text-center text-4xl font-black text-slate-900 mb-4" style={styles.title}>
          Learn{'\n'}
          <Text className="text-orange-500" style={styles.titleHighlight}>Smarter.</Text>
        </Text>
        
        {/* Description */}
        <Text className="text-center text-base text-slate-500 font-medium mb-10 px-6 leading-relaxed" style={styles.description}>
          The AI-powered companion that transforms your notes into interactive study tools.
        </Text>

        {/* Button */}
        <TouchableOpacity
          className="w-full h-14 bg-orange-500 rounded-full flex-row items-center justify-center active:opacity-90"
          style={[styles.button, { zIndex: 999 }]}
          activeOpacity={0.8}
          onPress={() => {
            console.log('Navigating to /login');
            router.push('/login');
          }}
        >
          <Text className="text-white text-lg font-bold mr-2" style={styles.buttonText}>Get Started</Text>
          <Ionicons name="arrow-forward" size={20} color="white" />
        </TouchableOpacity>

        {/* Footer */}
        <Text className="text-center text-xs text-slate-400 font-medium mt-8" style={styles.footer}>
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
    width: 128,
    height: 128,
  },
  title: {
    textAlign: 'center',
    fontSize: 36,
    fontWeight: '900',
    color: '#0f172a',
    marginBottom: 16,
    lineHeight: 42,
  },
  titleHighlight: {
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
