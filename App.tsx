/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

/* import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
 */

/* import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Calendario from './Sapo/Calendario';
import EmotionTracker from './Sapo/EmotionTracker';

const App = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [emotions, setEmotions] = useState({});

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date.toISOString().split('T')[0]);
  };

  const handleSaveEmotion = (date: string, emotion: string) => {
    setEmotions({ ...emotions, [date]: emotion });
  };

  return (
    <View style={styles.container}>
      <Calendario emotions={emotions} onDateSelect={handleDateSelect} />
      {selectedDate && (
        <EmotionTracker selectedDate={selectedDate} onSaveEmotion={handleSaveEmotion} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App; */

/* import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Calendario from './Sapo/Calendario';
import EmotionTracker from './Sapo/EmotionTracker';

const App = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [emotions, setEmotions] = useState({});

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
  };

  const handleSaveEmotion = (date: string, emotion: string) => {
    setEmotions({ ...emotions, [date]: emotion });
  };

  return (
    <View style={styles.container}>
      <Calendario emotions={emotions} onDateSelect={handleDateSelect} />
      {selectedDate && (
        <EmotionTracker selectedDate={selectedDate} onSaveEmotion={handleSaveEmotion} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App; */



import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Calendario from './Sapo/Calendario';
import EmotionTracker from './Sapo/EmotionTracker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);//Aca es donde se guarda la fecha seleccionada
  const [emotions, setEmotions] = useState<{ [date: string]: string }>({}); //Se guarda las emociones en un objeto con la fecha como key

  const handleDateSelect = (date: string) => { //Funcion que se encarga de guardar la fecha seleccionada
    setSelectedDate(date);
  };

  const handleSaveEmotion = async (date: string, emotion: string) => { //Función que se llama cuando se guarda una emoción. Actualiza el estado emotions y guarda los datos en AsyncStorage.
    const newEmotions = { ...emotions, [date]: emotion };
    setEmotions(newEmotions);
    await AsyncStorage.setItem('emotions', JSON.stringify(newEmotions));
  };

  const loadEmotions = async () => { //Se encarga de cargar las emociones guardadas en AsyncStorage y actualizarlas 
    const storedEmotions = await AsyncStorage.getItem('emotions');
    if (storedEmotions) {
      setEmotions(JSON.parse(storedEmotions));
    }
  };

  useEffect(() => { // se carfa las emociones almacenadas 




    loadEmotions();
  }, []);
  
  return (
    <View style={styles.container}>
      <Calendario emotions={emotions} onDateSelect={handleDateSelect} />
      {selectedDate && (
        <EmotionTracker selectedDate={selectedDate} onSaveEmotion={handleSaveEmotion} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;