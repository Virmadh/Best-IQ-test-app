import { Image ,StyleSheet } from 'react-native';
import { ThemedView } from '@/components/themed-view';
import data from '@/assets/data/iq_test_30_hard_questions.json';
import QuestionCard from '@/components/question-card';
import { useState } from 'react';
import {Button} from 'react-native';
import { useRouter } from 'expo-router'; 
//npm start
const Total_Questions = 10;
export default function TestPage() {
  const router = useRouter();
  const questions = data.questions;
  
  const [usedQuestionIds, setUsedQuestionIds] = useState<number[]>([]);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [score, setScore] = useState(0);
  const [testFinished, setTestFinished] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(() => getRandomQuestion());



  function getRandomQuestion(excludeIds: number[]=[]) {
    const availableQuestions = questions.filter((q) => !excludeIds.includes(q.id));

    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    return availableQuestions[randomIndex];
  };


  function handleAnswer(selectedAnswer: string) {
    if (selectedAnswer === currentQuestion.answer) {
      setScore((prevScore) => prevScore + 1);
    }
    const newUsedIds = [...usedQuestionIds, currentQuestion.id];
    setUsedQuestionIds(newUsedIds);
    // Pick another random question
    setCurrentQuestion(getRandomQuestion(newUsedIds));
      if (questionNumber > Total_Questions) {
    setTestFinished(true);
    return;

  } 
  setQuestionNumber((prevNumber) => prevNumber + 1);
  setCurrentQuestion(getRandomQuestion(usedQuestionIds));
  }


  
  if (testFinished) {
    return (
      <ThemedView style={styles.container}>
        quiz complete 
        {score}/{Total_Questions}
        <Button
        title="See How You Did"
        color="#ffbb00" // Text color on iOS, background color on Android
        onPress={() =>router.push('/explore')}
      />
      </ThemedView>
      
    );
  }
  
  return (
    <ThemedView style={styles.container}>
      <QuestionCard 
        question={currentQuestion}
        onAnswerSelected={handleAnswer}
      >

      </QuestionCard>
      
 
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C2D3C2',
  },
});