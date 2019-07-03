import React from 'react';
import { Text } from 'react-native';
import { ImageCard } from './components/common';
// import { createStackNavigator, createAppContainer } from 'react-navigation';

import { connect } from 'react-redux';
import { photosFetchData } from '../../actions/photos';

const clientId = 'ad37002fd54b270f4db76a58f2d261f8f8826507fd09dcd518160738411f8c2e';
const endpoint = 'https://api.unsplash.com/photos';

class PhotosList extends React.Component {
  componentDidMount() {
    this.props.fetchData(`${endpoint}?client_id=${clientId}`);
  }

  render() {
    // const { navigation } = this.props;

    if (this.props.hasErrored) {
      return <Text>Sorry! There was an error loading the items</Text>;
    }

    if (this.props.isLoading) {
      return <Text>Loading...</Text>;
    }

    return this.props.photos.map(item => (
      <ImageCard
        key={item.id}
        title={item}
        // onPress={() => navigation.navigate('Details', item)}
      />
    ));
  }
}

const mapStateToProps = state => {
  return {
    photos: state.photos,
    hasErrored: state.photosHasErrored,
    isLoading: state.photosIsLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(photosFetchData(url)),
  };
};

const PhotosListConnection = connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotosList);

export default PhotosListConnection;
