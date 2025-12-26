import { View, Text, Pressable, Image, Dimensions, StatusBar, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Animated, {
  FadeInDown,
  FadeInUp,
  withRepeat,
  withTiming,
  withSequence,
  useSharedValue,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated';
import { useEffect } from 'react';

const { width, height } = Dimensions.get('window');

export default function GettingStartedScreen() {
  const blob1TranslateY = useSharedValue(0);
  const blob2TranslateY = useSharedValue(0);

  useEffect(() => {
    blob1TranslateY.value = withRepeat(
      withSequence(
        withTiming(-30, { duration: 5000, easing: Easing.inOut(Easing.ease) }),
        withTiming(0, { duration: 5000, easing: Easing.inOut(Easing.ease) })
      ),
      -1,
      true
    );
    blob2TranslateY.value = withRepeat(
      withSequence(
        withTiming(30, { duration: 6000, easing: Easing.inOut(Easing.ease) }),
        withTiming(0, { duration: 6000, easing: Easing.inOut(Easing.ease) })
      ),
      -1,
      true
    );
  }, []);

  const blob1Style = useAnimatedStyle(() => ({
    transform: [{ translateY: blob1TranslateY.value }],
  }));

  const blob2Style = useAnimatedStyle(() => ({
    transform: [{ translateY: blob2TranslateY.value }],
  }));

  return (
    <View className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />
      
      {/* Background Blobs - Absolute & Animated */}
      <View className="absolute inset-0 overflow-hidden pointer-events-none">
        <Animated.View 
          style={[
            { 
              position: 'absolute', 
              top: -width * 0.3, 
              right: -width * 0.2,
              opacity: 0.6 
            }, 
            blob1Style
          ]}
        >
          <View className="w-[500px] h-[500px] bg-orange-100/70 rounded-full blur-3xl" />
        </Animated.View>
        
        <Animated.View 
          style={[
            { 
              position: 'absolute', 
              bottom: -width * 0.2, 
              left: -width * 0.2,
              opacity: 0.6
            }, 
            blob2Style
          ]}
        >
          <View className="w-[600px] h-[600px] bg-orange-50/80 rounded-full blur-3xl" />
        </Animated.View>
      </View>

      <SafeAreaView className="flex-1">
        <ScrollView 
          contentContainerStyle={{ 
            flexGrow: 1, 
            justifyContent: 'center',
            paddingHorizontal: 24,
            paddingBottom: 20,
          }}
          bounces={false}
          showsVerticalScrollIndicator={false}
        >
          
          {/* Top Section: Logo */}
          <View className="items-center justify-center py-4 w-full">
            <Animated.View 
              entering={FadeInUp.delay(200).duration(1000).springify()}
              className="relative items-center justify-center"
              style={{ alignSelf: 'center' }}
            >
              <View className="absolute bg-orange-500 blur-2xl opacity-20 transform scale-110 rounded-full" style={{ width: 120, height: 120 }} />
              <Image
                source={require('../../assets/adaptive-icon.png')}
                style={{ width: 120, height: 120 }}
                resizeMode="contain"
              />
            </Animated.View>
          </View>

          {/* Bottom Section: Text & Button */}
          <View className="mt-2 items-center w-full">
            <Animated.Text 
              entering={FadeInDown.delay(300).duration(800)}
              className="text-center text-4xl font-black text-slate-900 tracking-tighter leading-tight"
            >
              Learn
              {'\n'}
              <Text className="text-orange-500">Smarter.</Text>
            </Animated.Text>
            
            <Animated.Text 
              entering={FadeInDown.delay(500).duration(800)}
              className="text-center text-base text-slate-500 font-medium leading-relaxed mt-4 mb-10 px-6"
            >
              The AI-powered companion that transforms your notes into interactive study tools.
            </Animated.Text>

            <Animated.View 
              entering={FadeInDown.delay(700).duration(800)}
              className="w-full max-w-sm"
            >
              <Pressable
                className="w-full h-14 bg-orange-500 rounded-full flex-row items-center justify-center shadow-lg shadow-orange-500/30 active:scale-95 active:opacity-90 transition-all"
                onPress={() => router.push('/(onboarding)/login')}
                accessibilityLabel="Get Started with Blob"
                accessibilityRole="button"
              >
                <Text className="text-white text-lg font-bold mr-2">Get Started</Text>
                <Ionicons name="arrow-forward" size={20} color="white" />
              </Pressable>
            </Animated.View>

            <Animated.Text
              entering={FadeInDown.delay(900).duration(800)}
              className="text-center text-xs text-slate-400 font-medium mt-8"
            >
              No credit card required
            </Animated.Text>
          </View>

        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

