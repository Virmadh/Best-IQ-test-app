import { useCallback, useState } from 'react';
import { StyleSheet, ScrollView, useWindowDimensions } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from 'expo-router';
import { LineChart } from 'react-native-chart-kit/v2';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';


type ScoreRecord = {
  score: number;
  total: number;
  date: string;
};


export default function ExploreScreen() {

  function scoreToIQ(score: number) {
    const iqScores: Record<number, number> = {
      1: 70,
      2: 75,
      3: 80,
      4: 90,
      5: 100,
      6: 105,
      7: 110,
      8: 120,
      9: 130,
      10: 140,
    };
    return iqScores[score] ?? 50; // Default to 50 if score is not in the mapping
  }

  const [scoreHistory, setScoreHistory] =
    useState<ScoreRecord[]>([]);

  const { width } = useWindowDimensions();


  useFocusEffect(
    useCallback(() => {

      async function loadScores() {

        const storedScores =
          await AsyncStorage.getItem('scoreHistory');

        if (storedScores) {
          setScoreHistory(JSON.parse(storedScores));
        }
        else {
          setScoreHistory([]);
        }
      }

      loadScores();

    }, [])
  );


  const chartData = scoreHistory.map(
    (result, index) => ({
      test: `Test ${index + 1}`,
      iq: scoreToIQ(result.score),
    })
  );


  return (

    <ThemedView style={styles.container}>

      <ScrollView contentContainerStyle={styles.content}>

        <ThemedText type="title">
          Your Progress
        </ThemedText>


        {scoreHistory.length === 0 ? (

          <ThemedText style={styles.noScores}>
            Complete a test to see your progress.
          </ThemedText>

        ) : (

          <>

            <ThemedText type="subtitle">
              Test Score History
            </ThemedText>


            <LineChart
              interaction={{ mode: "tap"}}
              tooltip={{shared: false}}
              data={chartData}

              xKey="test"
              yKey="iq"
              

              width={width - 32}
              height={700}

              yDomain={{
                min: 70,
                max: 140,
              }}

              showDots={true}
              curve="monotone"
              showHorizontalGridLines={true}
              showVerticalGridLines={true}
            />


          </>

        )}

      </ScrollView>

    </ThemedView>

  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#C2D3C2',
  },

  content: {
    padding: 16,
    paddingTop: 60,
    gap: 20,
  },

  noScores: {
    textAlign: 'center',
    marginTop: 40,
  },

});