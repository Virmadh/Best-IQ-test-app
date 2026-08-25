import { Image ,StyleSheet } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { View, Text, Pressable } from "react-native";
import data from '@/assets/data/iq_test_30_hard_questions.json';
//npm start
export default function TestPage() {
  const questions = data.questions;
  console.log(questions[0].question);
  return (
    <ThemedView style={styles.container}>

      <View style={styles.question}>
      <ThemedText type="title" style={styles.text}>{questions[0].question}</ThemedText>
      </View>
      <View style={styles.imagecontainer}>  
        <Image
        source={require('@/assets/images/image.png')}
      />
      </View>
      <View style={styles.option}>
      
      <Pressable style={({ pressed }) => [
        styles.button,
        pressed && styles.pressedState
      ]}>

      <ThemedText type="subtitle" style={styles.answertext}>answer 1</ThemedText>
      
      </Pressable>
      <Pressable style={({ pressed }) => [
        styles.button,
        pressed && styles.pressedState
      ]}> 
        
      <ThemedText type="subtitle" style={styles.answertext}>answer 2</ThemedText>
      </Pressable>
      </View>
            <View style={styles.option}>
      <Pressable style={({ pressed }) => [
        styles.button,
        pressed && styles.pressedState
      ]}> 
      <ThemedText type="subtitle" style={styles.answertext}>answer 3</ThemedText>
      </Pressable>
      <Pressable style={({ pressed }) => [
        styles.button,
        pressed && styles.pressedState
      ]}>
        
      <ThemedText type="subtitle" style={styles.answertext}>answer 4</ThemedText>
      </Pressable>
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  imagecontainer: {
    alignItems: 'center',
    paddingVertical: 30,
    paddingBottom: 60

  },
  answertext: {
    color: '#000',
    alignItems: 'center',
    paddingHorizontal: 300,
    paddingVertical: 50
  },
   button: {
    padding: 10,
    borderRadius: 5,
  },
  pressedState: {
    opacity: 0.7, 
  },
});