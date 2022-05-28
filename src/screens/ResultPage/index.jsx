import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';

const ResultPage = ({ route }) => {
  const { label, result, treatment } = route.params;
  console.log(route);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Result Page</Text>
      <View style={styles.resultContainer}>
        <View>
          <Text style={styles.result}>
            Label: <Text style={{ color: 'black' }}>{label}</Text>
          </Text>
          <Text style={{ fontSize: 15 }}>
            Confidence:
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>
              {result + '%'}
            </Text>
          </Text>
          <Text style={{ fontSize: 15 }}>Treatment : {treatment}</Text>
        </View>
      </View>
    </View>
  );
};

export default ResultPage;
