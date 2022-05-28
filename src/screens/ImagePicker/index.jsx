import { View, Text, Image, Button, Pressable } from 'react-native';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons, FontAwesome, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import axios from 'axios';

const ImageSelector = ({ route }) => {
  console.log(route.params);
  const navigation = useNavigation();

  const [pickedImagePath, setPickedImagePath] = useState('');
  const [image, setImage] = useState('');
  const [result, setResult] = useState('');
  const [label, setLabel] = useState('');
  const [treatment, setTreatment] = useState('');

  const getPredication = (param) => {
    console.log(param);
    return new Promise((resolve, reject) => {
      const bodyFormData = new FormData();

      bodyFormData.append('file', JSON.stringify(param));
      axios
        // .post(`https://10.58.11.26:8000/predict?type=${route.params}`, {
        .post(
          'https://6290f143665ea71fe13e5508.mockapi.io/http/localhost/3000/sample',
          {
            method: 'POST',
            header: {
              'Content-Type':
                'multipart/form-data; charset=utf-8; boundary="another cool boundary";',
            },
            body: bodyFormData,
          }
        )
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          setLabel('Failed to predicting.');
          reject('err', error);
        });
    });
  };
  const getResult = async (result) => {
    setImage(result.uri);
    setLabel(<Text style={{ color: 'black' }}>Predicting...</Text>);
    setResult('');
    const params = {
      uri: result.uri,
      name: `${route.params} file`,
      type: result.type,
    };
    const res = await getPredication(params);
    if (res?.data?.class) {
      setLabel(res.data.class);
      setResult(res.data.confidence);
      setTreatment(res.data.treatment);
    } else {
      setLabel('Failed to predict');
    }
  };
  const clearOutput = () => {
    // console.log('Pressed')
    setResult('');
    setTreatment('');
    setImage('');
    setLabel('');
    setPickedImagePath('');
  };

  const showImagePicker = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync();
    console.log(result);

    if (!result.cancelled) {
      getResult(result);
      setPickedImagePath(result.uri);
      console.log(result.uri);
    }
  };

  const openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("You've refused to allow this app to access your photos!");
      return;
    }
    const result = await ImagePicker.launchCameraAsync();
    console.log(result);
    if (!result.cancelled) {
      getResult(result);
      setPickedImagePath(result.uri);
      console.log(result.uri);
    }
  };
  return (
    <>
      <View style={styles.backIcon}>
        <Ionicons
          name='chevron-back-sharp'
          size={24}
          color='black'
          onPress={() => navigation.goBack()}
        />
      </View>

      <View style={styles.container}>
        <View>
          <Text style={styles.text}>Plantin Pests Prediction</Text>
        </View>
        <View
          style={[
            styles.buttonContainer,
            pickedImagePath ? { marginTop: 50 } : { marginTop: 150 },
          ]}
        >
          <View style={styles.iconContainer}>
            <View style={styles.iconStyle}>
              {!image ? (
                <FontAwesome
                  name='photo'
                  size={50}
                  color={'#009378'}
                  onPress={showImagePicker}
                />
              ) : null}

              <Button
                onPress={showImagePicker}
                title='Select  image'
                color='#009378'
              />
            </View>
          </View>
          <View style={styles.iconContainer}>
            <View style={styles.iconStyle}>
              {!image ? (
                <Entypo
                  name='camera'
                  size={50}
                  color={'#009378'}
                  onPress={openCamera}
                />
              ) : null}

              <Button
                onPress={openCamera}
                title='Open camera'
                color='#009378'
              />
            </View>
          </View>
          {/* <Button onPress={showImagePicker} title='Select an image' />
          <Button onPress={openCamera} title='Open camera' /> */}
        </View>

        <View style={styles.imageContainer}>
          {pickedImagePath !== '' && (
            <Image source={{ uri: pickedImagePath }} style={styles.image} />
          )}
        </View>
        <View>
          {
            // result &&
            // label &&

            // <View>
            //   <Text>
            //     {'Label: \n'}
            //     <Text style={{ color: 'black' }}>{label}</Text>
            //   </Text>
            //   <Text>
            //     {'Confidence: \n'}
            //     <Text
            //       style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}
            //     >
            //       {parseFloat(result).toFixed(2) + '%'}
            //     </Text>
            //   </Text>
            // </View>
            result
              ? navigation.navigate('ResultPage', { label, result, treatment })
              : console.log(label, result) ||
                (image && <Text style={{ color: 'black' }}>{label}</Text>) || (
                  <Text style={{ color: 'black', padding: 30 }}>
                    Use above buttons to select a picture.
                  </Text>
                )
          }
          {image ? (
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? 'rgb(201, 230, 255)' : '#009378',
                },
                styles.btn,
              ]}
              onPress={clearOutput}
            >
              <Text style={{ color: 'white', fontWeight: 'bold' }}>Clear</Text>
            </Pressable>
          ) : null}
          <View></View>
        </View>
      </View>
    </>
  );
};

export default ImageSelector;
