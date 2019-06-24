import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'

const Layout = props => {
  const { container } = styles
  return (
    <ScrollView>
      <View style={container}>
        {props.children}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 150
  }
})

<<<<<<< HEAD
export {Layout}
=======
export { Layout }
>>>>>>> 8204f00788ee4e2569d59258bb3d583abf7a5935
