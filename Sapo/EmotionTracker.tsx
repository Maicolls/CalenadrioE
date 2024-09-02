/* import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

interface EmotionTrackerProps {
    selectedDate: string;
}

interface EmotionTrackerState {
    emotion: string;
}

const EmotionTracker: React.FC<EmotionTrackerProps> = ({ selectedDate }) => {
    const [emotion, setEmotion] = useState<string>('');

    const onSaveEmotion = (date: string, emotion: string) => {
        // Save emotion logic here
    };

    return (
        <View style={styles.container}>
            <Text style={styles.dateText}>Fecha Seleccionada: {selectedDate}</Text>
            <TextInput
                style={styles.input}
                placeholder="Ingresa tu emoción"
                value={emotion}
                onChangeText={setEmotion}
            />
            <Button title="Guardar Emoción" onPress={() => onSaveEmotion(selectedDate, emotion)} />
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  dateText: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default EmotionTracker; */

/* import React from 'react';
import { View, Button, TextInput } from 'react-native';

interface EmotionTrackerProps {
  selectedDate: string;
  onSaveEmotion: (date: string, emotion: string) => void;
}

const EmotionTracker: React.FC<EmotionTrackerProps> = ({ selectedDate, onSaveEmotion }) => {
  const [emotion, setEmotion] = React.useState('');

  const handleSave = () => {
    onSaveEmotion(selectedDate, emotion);
  };

  return (
    <View>
      <TextInput
        placeholder="Enter your emotion"
        value={emotion}
        onChangeText={setEmotion}
      />
      <Button title="Save Emotion" onPress={handleSave} />
    </View>
  );
};

export default EmotionTracker; */


import React from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';

interface EmotionTrackerProps {
  selectedDate: string;
  onSaveEmotion: (date: string, emotion: string) => void;
}

const EmotionTracker: React.FC<EmotionTrackerProps> = ({ selectedDate, onSaveEmotion }) => {
  const [emotion, setEmotion] = React.useState('');

  const handleSave = () => {
    onSaveEmotion(selectedDate, emotion);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your emotion"
        value={emotion}
        onChangeText={setEmotion}
      />
      <Button title="Save Emotion" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default EmotionTracker;