import { View, Text, ImageBackground, Image } from 'react-native';
import React, { useState } from 'react';
import data from '../../assets/data/data.json';
import { styles } from './styles';
import logo from '../../assets/images/logo.png';
const HomeScreen = () => {
  const [desc, setDesc] = useState(data.description.slice(0, 250));
  const [readMore, setReadMore] = useState(false);

  console.log(data.name);
  return (
    <View style={styles.container}>
      {/* <ImageBackground source={logo} style={styles.backgroundImage}> */}
      <Text style={styles.heading}>{data.name}</Text>
      {/* <View style={styles.imageContainer}> */}
      <Image source={logo} style={styles.image} />
      {/* </View> */}
      <View style={styles.descriptionContainer}>
        <Text style={[styles.description, {fontWeight: '500'}]}>
          {desc}
          {!readMore && '...'}
          <Text
            style={{ fontWeight: 'bold' }}
            onPress={() => {
              if (!readMore) {
                setDesc(data.description);
                setReadMore(true);
              } else {
                setDesc(data.description.slice(0, 250));
                setReadMore(false);
              }
            }}
          >
            {readMore ? 'Show Less' : 'Read More'}
          </Text>
        </Text>
      </View>
      {/* </ImageBackground> */}
    </View>
  );
};

export default HomeScreen;

// #24A19C
