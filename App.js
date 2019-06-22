import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import { Header, ImageCard, Layout } from './components/common'

const clientId = 'ad37002fd54b270f4db76a58f2d261f8f8826507fd09dcd518160738411f8c2e'
const endpoint = 'https://api.unsplash.com/search/photos'

export default class App extends React.Component {
  state = {
    headerTitle: 'Photos Galary'
  }
  
  async componentDidMount() {
    try {
      const photos = await fetch(
        `${endpoint}?query=${this.query}&client_id=${clientId}`
      )
      const photosJson = await photos.json()
      this.setState({photos: photosJson})
    } catch (e) {
      throw e
    }
  }

  render() {
    const { headerTitle } = this.state

    let card = <Text>No images</Text>;
    if (typeof this.state.photos === 'object') {
      const { results } = this.state.photos
      card = []
      for (let item in results) {
        card.push(<ImageCard title={results[item]} key={results[item].id} />)
      }
    }
    console.log('ads')
    return (
      <View>
        <Header title={headerTitle} />
        <ScrollView>
          <Layout>
            {card}
          </Layout>
        </ScrollView>
      </View>
    )
  }
}
