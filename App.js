import React from 'react';
import { View, ScrollView } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Header, Layout, Details } from './components/common';

import PhotosList from './components/common/PhotosList';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore({});

class HomeScreen extends React.Component {
  state = {
    headerTitle: 'Photos Galary',
  };

  render() {
    const { headerTitle } = this.state;
    const { navigation } = this.props;

    return (
      <Provider store={store}>
        <View>
          <Header title={headerTitle} onPress={() => navigation.navigate('Search')} />
          <ScrollView>
            <Layout>
              <PhotosList navigation={navigation} />
            </Layout>
          </ScrollView>
        </View>
      </Provider>
    );
  }
}

class DetailsScreen extends React.Component {
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
