import React from 'react';
import { View, ScrollView } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Header, Layout, Details, PhotosList } from './components/common';

import { Provider } from 'react-redux'; // , connect
// import { photosFetchData } from './actions/photos';
import configureStore from './store/configureStore';

// const clientId = 'ad37002fd54b270f4db76a58f2d261f8f8826507fd09dcd518160738411f8c2e';
// const endpoint = 'https://api.unsplash.com/photos';

// const store = configureStore();

class HomeScreen extends React.Component {
  state = {
    headerTitle: 'Photos Galary',
    // photos: [],
  };

  // fetchData(url) {
  //   this.setState({ isLoading: true });

  //   fetch(url)
  //     .then(response => {
  //       if (!response.ok) {
  //         throw Error(response.statusText);
  //       }

  //       this.setState({ isLoading: false });

  //       return response;
  //     })
  //     .then(response => response.json())
  //     .then(photos => this.setState({ photos }))
  //     .catch(() => this.setState({ hasErrored: true }));
  // }

  // componentDidMount() {
  //   this.fetchData(`${endpoint}?client_id=${clientId}`);
  // }

  render() {
    const { headerTitle } = this.state;

    // if (this.state.hasErrored) {
    //   return (
    //     <View>
    //       <Header title={headerTitle} />
    //       <Text>Sorry! There was an error loading the items</Text>
    //     </View>
    //   );
    // }

    // if (this.state.isLoading) {
    //   return (
    //     <View>
    //       <Header title={headerTitle} />
    //       <Text>Loading...</Text>
    //     </View>
    //   );
    // }

    // const { photos } = this.state;
    // const { navigation } = this.props;

    return (
      <View>
        <Header title={headerTitle} />
        {/* searchIcon="search" onPress={() => navigation.navigate('Search')} */}
        <ScrollView>
          <Layout>
            <Provider store={configureStore}>
              <PhotosList />
            </Provider>
          </Layout>
        </ScrollView>
      </View>
    );
  }
}

// class SearchScreen extends React.Component {
//   state = {
//     photos: [],
//   };

//   fetchData(url) {
//     this.setState({ isLoading: true });

//     fetch(url)
//       .then(res => res.json())
//       .catch(() => this.setState({ hasErrored: true })) // () => []
//       .then(photos => this.setState({ photos }));

//     this.setState({ isLoading: false });
//   }

//   componentDidMount() {
//     this.fetchData(`${endpoint}?client_id=${clientId}`);
//   }

//   render() {
//     if (this.state.hasErrored) {
//       return (
//         <View>
//           <Header title={Error} />
//         </View>
//       );
//     }

//     if (this.state.isLoading) {
//       return (
//         <View>
//           <Header title="Loading..." />
//         </View>
//       );
//     }

//     const { photos } = this.state;
//     const { navigation } = this.props;

//     console.log(navigation);

//     return (
//       <View>
//         <Header
//           goBackIcon="chevron-left"
//           searchIcon="search"
//           onPressBack={() => navigation.goBack()}
//           onPressSearch={() => navigation.goBack()}
//         />
//         <ScrollView>
//           <Layout>
//             {photos.map(item => (
//               <ImageCard
//                 key={item.id}
//                 title={item}
//                 onPress={() => navigation.navigate('Details', item)}
//               />
//             ))}
//           </Layout>
//         </ScrollView>
//       </View>
//     );
//   }
// }

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
    // Search: SearchScreen,
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
