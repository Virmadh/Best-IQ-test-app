import { Image ,StyleSheet } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { View, Text, Pressable } from "react-native";
//npm start
export default function TestPage() {
  return (
    <ThemedView style={styles.container}>

      <View style={styles.question}>
      <ThemedText type="title" style={styles.text}>Question</ThemedText>
      </View>
      <View style={styles.imagecontainer}>  
        <Image
        source={require('@/assets/images/favicon.png')}
      />
      </View>
    
      <ThemedText type="subtitle" style={styles.text}>HELLO WORLD</ThemedText>
      <View style={styles.card}>
      <Text>Sample Text</Text>

      </View>
 
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C2D3C2',
  },
  text:{
   
    color: '#000',
  },

  card: {

  },
  question: {
    alignItems: 'center',


  },
  option: {

  },

  imagecontainer: {
    alignItems: 'center',

  },
});