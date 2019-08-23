import React from 'react';
import { View, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => (
  <View>
    <ImageDetail />
    <ImageDetail />
    <ImageDetail />
  </View>
);


const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default ImageScreen;
