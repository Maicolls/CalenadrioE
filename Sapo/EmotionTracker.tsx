import React, { useState } from 'react';
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

export default EmotionTracker;