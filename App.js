import React from 'react';
import { View, ScrollView } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Header, ImageCard, Layout, Details } from './components/common';

const clientId = 'ad37002fd54b270f4db76a58f2d261f8f8826507fd09dcd518160738411f8c2e';
const endpoint = 'https://api.unsplash.com/photos';

class HomeScreen extends React.Component {
  state = {
    headerTitle: 'Photos Galary',
    photos: [],
  };

  componentDidMount() {
    fetch(`${endpoint}?client_id=${clientId}`)
      .then(res => res.json())
      .catch(() => [])
      .then(photos => this.setState({ photos }));
  }

  render() {
    const { headerTitle } = this.state;
    const { photos } = this.state;
    const { navigation } = this.props;

    console.log(navigation);

    return (
      <View>
        <Header
          title={headerTitle}
          searchIcon="search"
          onPress={() => navigation.navigate('Search')}
        />
        <ScrollView>
          <Layout>
            {photos.map(item => (
              <ImageCard
                key={item.id}
                title={item}
                onPress={() => navigation.navigate('Details', item)}
              />
            ))}
          </Layout>
        </ScrollView>
      </View>
    );
  }
}

class SearchScreen extends React.Component {
  state = {
    photos: [],
  };

  componentDidMount() {
    fetch(`${endpoint}?client_id=${clientId}`)
      .then(res => res.json())
      .catch(() => [])
      .then(photos => this.setState({ photos }));
  }

  render() {
    const { photos } = this.state;
    const { navigation } = this.props;

    console.log(photos);

    return (
      <View>
        <Header
          goBackIcon="chevron-left"
          searchIcon="search"
          onPressBack={() => navigation.goBack()}
          onPressSearch={() => navigation.goBack()}
        />
        <ScrollView>
          <Layout>
            {photos.map(item => (
              <ImageCard
                key={item.id}
                title={item}
                onPress={() => navigation.navigate('Details', item)}
              />
            ))}
          </Layout>
        </ScrollView>
      </View>
    );
  }
}

export class DetailsScreen extends React.Component {
  state = {
    headerTitle: 'Details Page',
  };

  render() {
    const { headerTitle } = this.state;

    return (
      <View>
        <Header
          title={headerTitle}
          goBackIcon="chevron-left"
          onPressBack={() => this.props.navigation.goBack()}
        />
        <ScrollView>
          <Details title={this.props.navigation.state.params} />
        </ScrollView>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Search: SearchScreen,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
