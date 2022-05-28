import { View, Text, StyleSheet, Button, Pressable } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

const OptionScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select an Option</Text>
      <View style={{ marginTop: 100 }}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('ImageSelector', 'insect')}
        >
          <Text style={styles.text}>Insect</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('ImageSelector', 'leaves')}
        >
          <Text style={styles.text}>Leaves</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('ImageSelector', 'stem')}
        >
          <Text style={styles.text}>Stems</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default OptionScreen;
