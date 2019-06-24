import React from 'react'
<<<<<<< HEAD
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { width } from './../../constants/reactNative'

const ImageCard = ( { title, onPress }) => {
  const { card, infoBlock, cardImage, userBlock, profileImage, nick, postName} = styles
  const { user, alt_description, urls } = title
=======
import { View, Text, Image, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import { width } from './../../constants/reactNative'

const ImageCard = ( item ) => {
  const { card, infoBlock, cardImage, userBlock, profileImage, nick, postName} = styles
  const { color, user, alt_description, urls } = item.title
>>>>>>> 8204f00788ee4e2569d59258bb3d583abf7a5935

  const { raw } = urls        // Image URL
  const { profile_image } = user
  const { small } = profile_image
  const { username } = user

  return (
<<<<<<< HEAD
    <TouchableOpacity title={title} onPress={onPress}>
      <View style={card}>
        <Image 
          style={cardImage}
          source={{uri: raw}}
        />
        <View style={infoBlock}>
          <Text style={postName}>{alt_description}</Text>
          <View style={userBlock}>
            <Image style={profileImage} source={{uri: small}} />
            <Text style={nick}>{username}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
=======
    <View style={card}>
      <Image 
        style={cardImage}
        source={{uri: raw}}
      />
      <View style={infoBlock}>
        <Text style={postName}>{alt_description}</Text>
        <View style={userBlock}>
          <Image style={profileImage} source={{uri: small}} />
          <Text style={nick}>{username}</Text>
        </View>
      </View>
    </View>
>>>>>>> 8204f00788ee4e2569d59258bb3d583abf7a5935
  )
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 20,
    marginVertical: 10,
    position: 'relative'
  },
  infoBlock: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.2)',
    width: width - 40,
    height: 200
  },
  cardImage: {
    flex: 1,
    height: 200
  },
  userBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  profileImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10
  },
  nick: {
    color: '#fff'
  },
  postName: {
    color: '#fff',
    flex: 1,
    padding: 10
  }
})

<<<<<<< HEAD
export {ImageCard}
=======
export { ImageCard }
>>>>>>> 8204f00788ee4e2569d59258bb3d583abf7a5935
