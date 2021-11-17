import React from 'react'
import { StyleSheet, Text, Image, View } from 'react-native'

const TabOneScreen = () => {
  return (
    <View style={styles.container}>

      <Image source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png' }} style={styles.image} />
      <View style={styles.badgeContainer} >
        <Text style={styles.badgeText}>4</Text>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>elon must</Text>
          <Text style={styles.text} >11:56 AM</Text>
        </View>
        <Text numberOfLines={1} style={styles.text}>any thing Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum necessitatibus doloremque beatae consectetur delectus, sint eveniet est!</Text>
      </View>
    </View>
  )
}

export default TabOneScreen

const styles = StyleSheet.create({
  text: {
    color: "gray"
  },
  container: {
    flexDirection: 'row',
    padding: 10
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 3
  },
  image: {
    height: '50px',
    width: '50px',
    borderRadius: 50,
    marginRight: 10
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  badgeContainer: {
    backgroundColor: '#3872E9',
    width: 20,
    height: 20,
    borderRadius: 50,
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    left:44,
    top:10,
    borderWidth:1,
    borderColor:'white'
  },
  badgeText: {
    color: 'white',
    fontSize:12
  }
})
