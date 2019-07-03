import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import { width } from './../../constants/reactNative';

const Details = ({ title }) => {
  const { imageDetails, userBlock, profileImage, textBlock } = styles;
  const { user, description, urls } = title;

  const { raw } = urls; // Image URL
  const { profile_image } = user;
  const { small } = profile_image;
  const { username } = user;

  return (
    <View style={imageDetails}>
      <AutoHeightImage width={width} source={{ uri: raw }} />
      <View style={textBlock}>
        <View style={userBlock}>
          <Image style={profileImage} source={{ uri: small }} />
          <Text>{username}</Text>
        </View>
        <Text>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageDetails: {
    paddingBottom: 150,
  },
  userBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  profileImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10,
  },
  textBlock: {
    padding: 10,
  },
});

export { Details };
