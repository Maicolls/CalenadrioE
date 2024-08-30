/* import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

interface Emotions {
    [key: string]: any;
}

interface CalendarioProps {
    emotions: Emotions;
    onDateSelect: (date: string) => void;
}

const Calendario: React.FC<CalendarioProps> = ({ emotions, onDateSelect }) => {
    const renderEmotion = (date: string): React.ReactNode => {
        const emotion = emotions[date];
        return emotion ? <Text style={styles.emotionText}>{emotion}</Text> : null;
    };

    return (
        <View style={styles.container}>
            <Calendar
                onDayPress={(day: { dateString: string }) => onDateSelect(day.dateString)}
                markedDates={Object.keys(emotions).reduce((acc: { [key: string]: { marked: boolean, dotColor: string } }, date: string) => {
                    acc[date] = { marked: true, dotColor: 'blue' };
                    return acc;
                }, {})}
                dayComponent={({ date, state }: { date: { dateString: string, day: number }, state: string }) => (
                    <View>
                        <Text style={{ textAlign: 'center', color: state === 'disabled' ? 'gray' : 'black' }}>
                            {date.day}
                        </Text>
                        {renderEmotion(date.dateString)}
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emotionText: {
    fontSize: 12,
    color: 'red',
    textAlign: 'center',
  },
});

export default Calendario; */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

interface Emotions {
    [key: string]: any;
}

interface CalendarioProps {
    emotions: Emotions;
    onDateSelect: (date: string) => void;
}

const Calendario: React.FC<CalendarioProps> = ({ emotions, onDateSelect }) => {
    const renderEmotion = (date: string): React.ReactNode => {
        const emotion = emotions[date];
        return emotion ? <Text style={styles.emotionText}>{emotion}</Text> : null;
    };

    return (
        <View style={styles.container}>
            <Calendar
                onDayPress={(day: { dateString: string }) => onDateSelect(day.dateString)}
                markedDates={Object.keys(emotions).reduce((acc: { [key: string]: { marked: boolean, dotColor: string } }, date: string) => {
                    acc[date] = { marked: true, dotColor: 'blue' };
                    return acc;
                }, {})}
                dayComponent={({ date, state }: { date: { dateString: string, day: number }, state: string }) => (
                    <View>
                        <Text style={{ textAlign: 'center', color: state === 'disabled' ? 'gray' : 'black' }}>
                            {date.day}
                        </Text>
                        {renderEmotion(date.dateString)}
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emotionText: {
    fontSize: 12,
    color: 'red',
    textAlign: 'center',
  },
});

export default Calendario;