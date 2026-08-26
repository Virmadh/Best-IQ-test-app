import { Image ,StyleSheet } from 'react-native';
import { ThemedView } from '@/components/themed-view';
import data from '@/assets/data/iq_test_30_hard_questions.json';
import QuestionCard from '@/components/question-card';
import { useState } from 'react';
//npm start
export default function TestPage() {
  const questions = data.questions;
  function getRandomQuestion(excludeId?: number) {
    const availableQuestions = questions.filter((q) => q.id !== excludeId);

    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    return availableQuestions[randomIndex];
  };
  const [currentQuestion, setCurrentQuestion] = useState(getRandomQuestion());

  function handleAnswer(selectedAnswer: string) {
    if (selectedAnswer === currentQuestion.answer) {
      console.log('Correct :)');
    } else {
      console.log('Incorrect :(');
    }
    // Pick another random question
    setCurrentQuestion(getRandomQuestion(currentQuestion.id));
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