import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Constants from 'expo-constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Header = ({ title, searchIcon, goBackIcon, onPress, onPressBack, onPressSearch }) => {
  const {
    headerContainer,
    titleContainer,
    headerText,
    goBackIconStyle,
    searchIconStyle,
    searchArea,
  } = styles;
  return (
    <View style={headerContainer}>
      <View style={titleContainer}>
        {goBackIcon && (
          <TouchableOpacity onPress={onPressBack}>
            <Entypo name={goBackIcon} style={goBackIconStyle} />
          </TouchableOpacity>
        )}
        <Text style={headerText}>{title}</Text>
      </View>
      {searchIcon && (
        <TouchableOpacity onPress={onPress}>
          <FontAwesome name={searchIcon} style={searchIconStyle} />
        </TouchableOpacity>
      )}
      {onPressSearch && (
        <TouchableOpacity onPress={onPress}>
          <View style={searchArea}>
            <TextInput placeholder="Search" />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 80,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#4bcffc',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    elevation: 8,
    position: 'relative',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    margin: 20,
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
  goBackIconStyle: {
    marginLeft: 10,
    marginRight: -10,
    fontSize: 35,
    color: '#fff',
  },
  searchIconStyle: {
    marginRight: 20,
    fontSize: 25,
    color: '#fff',
  },
  searchArea: {
    backgroundColor: '#fff',
    marginRight: 20,
    width: 210,
    padding: 5,
    borderRadius: 5,
    height: 30,
  },
});

export { Header };
