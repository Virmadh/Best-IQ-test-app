import { Pressable, StyleSheet, View } from "react-native";
import { ThemedText } from "@/components/themed-text";


type Question = {
  id: number;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
};
type Props = {
  question: Question;
  onAnswerSelected: (selectedAnswer: string) => void;
};
export default function QuestionCard({ question, onAnswerSelected }: Props) {
  return (
    <View>
    {/*Question*/}
    <View style={styles.question}>
      <ThemedText type="title" style={styles.text}>
        {question.question}
        </ThemedText>
    </View>

    {/* Answers */}
    <View style={styles.option}>
      {question.options.map((option) => (
        <Pressable
            key={option}
            onPress={() => onAnswerSelected(option)}
            style={({ pressed }) => [
              styles.button,
              pressed && styles.pressedState,
            ]}
          >
            <ThemedText type="subtitle" style={styles.answerText}>
              {option}
            </ThemedText>
          </Pressable>
      ))}
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  question: {
    alignItems: "center",
    padding: 20,
  },
  text: {
    color: "#000",
    textAlign: "center",
  },
  option: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 15,
    },
    button: {
      backgroundColor: "#fff",
      padding: 20,
      width:"45%",
      borderRadius: 10,
      alignItems: "center",

     },
     answerText: {
      color: "#000",
     },
     pressedState: {
        opacity: 0.7,
     },
});