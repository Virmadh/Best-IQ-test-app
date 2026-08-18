import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Button} from 'react-native';
import { useRouter } from 'expo-router';


export default function HomeScreen() {
  const router = useRouter();
  return (
    <ThemedView style={styles.container}>
    <ThemedText type="title">Welcome Vir!</ThemedText>
    <HelloWave/>
    <Button
        title="Start IQ Test"
        color="#007AFF" // Text color on iOS, background color on Android
        onPress={() =>router.push('/testpage')}
      />
    </ThemedView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ED6F41',
    padding: 24,

  },
  
});
