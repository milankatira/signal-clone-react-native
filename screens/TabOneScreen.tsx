import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const TabOneScreen = () => {
  return (
    <View>
      <Text style={styles.text}>hii</Text>
    </View>
  )
}

export default TabOneScreen

const styles = StyleSheet.create({
  text:{
    color: 'red',
    fontSize: 30
  }
})
