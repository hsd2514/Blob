import { View, Text, Pressable, TouchableOpacity, Image, StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white" style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar barStyle="dark-content" />
      
      {/* Back Button */}
      <View className="px-4 pt-4" style={[styles.header, { zIndex: 10 }]}>
        <TouchableOpacity 
          onPress={() => {
            if (router.canGoBack()) {
              router.back();
            } else {
              router.replace('/(onboarding)/getting-started');
            }
          }}
          className="w-10 h-10 rounded-full bg-slate-50 items-center justify-center active:bg-slate-100"
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          style={[
            styles.backButton,
          ]}
          activeOpacity={0.7}
        >
          <Ionicons name="arrow-back" size={24} color="#334155" />
        </TouchableOpacity>
      </View>

      <View className="flex-1 items-center justify-center px-8 -mt-20" style={styles.content}>
        {/* Logo */}
        <View className="mb-8" style={styles.logoContainer}>
          <Image
            source={require('../../assets/adaptive-icon.png')}
            className="w-20 h-20"
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {/* Title */}
        <Text className="text-3xl font-bold text-slate-900 mb-3 text-center" style={styles.title}>
          Welcome Back
        </Text>
        
        {/* Description */}
        <Text className="text-center text-base text-slate-500 mb-10 px-6 leading-relaxed" style={styles.description}>
          Sign in to sync your progress and access your AI study tools.
        </Text>

        {/* Google Login Button */}
        <Pressable
          className="w-full h-14 flex-row items-center justify-center bg-white border border-slate-200 rounded-xl active:bg-slate-50"
          style={({ pressed }) => [
            styles.googleButton,
            pressed && styles.googleButtonPressed
          ]}
          onPress={() => {}}
        >
          <Ionicons name="logo-google" size={22} color="#475569" style={{ marginRight: 12 }} />
          <Text className="text-base font-semibold text-slate-700 ml-3" style={styles.googleButtonText}>
            Continue with Google
          </Text>
        </Pressable>

        {/* Footer */}
        <Text className="text-center text-xs text-slate-400 mt-8 px-8 leading-5" style={styles.footer}>
          By continuing, you agree to our{' '}
          <Text className="text-slate-600 font-medium" style={styles.footerLink}>Terms of Service</Text> and{' '}
          <Text className="text-slate-600 font-medium" style={styles.footerLink}>Privacy Policy</Text>.
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
  header: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f8fafc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonPressed: {
    backgroundColor: '#f1f5f9',
    opacity: 0.7,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
    marginTop: -80,
  },
  logoContainer: {
    marginBottom: 32,
  },
  logo: {
    width: 80,
    height: 80,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 12,
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    fontSize: 16,
    color: '#64748b',
    marginBottom: 40,
    paddingHorizontal: 24,
    lineHeight: 24,
  },
  googleButton: {
    width: '100%',
    height: 56,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  googleButtonPressed: {
    backgroundColor: '#f8fafc',
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
  googleButtonText: {
    color: '#334155',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    textAlign: 'center',
    fontSize: 12,
    color: '#cbd5e1',
    marginTop: 32,
    paddingHorizontal: 32,
    lineHeight: 18,
  },
  footerLink: {
    color: '#64748b',
    fontWeight: '500',
  },
});
