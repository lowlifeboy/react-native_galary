import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import Header from '../common/Header'
import ImageCard from '../common/ImageCard'
import Layout from '../common/Layout'

const clientId = 'ad37002fd54b270f4db76a58f2d261f8f8826507fd09dcd518160738411f8c2e'
const endpoint = 'https://api.unsplash.com/search/photos'

export default class HomeScreen extends React.Component {
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

    console.log(this.props)
    
    return (
      <View>
        <Header title={headerTitle} />
        <Text>asdf</Text>
        <ScrollView>
          <Layout>
            {card}
          </Layout>
        </ScrollView>
      </View>
    )
  }
}
