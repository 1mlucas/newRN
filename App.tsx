import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
          <View style={styles.top}>
            <Text style={styles.topText}>Top Left</Text>
          </View>
        </View>
      <View style={styles.containerCenter}>
        <View style={styles.center}>
          <Text style={styles.centerText}>Center</Text>
        </View>

      </View>
      <View style={styles.containerBottom}>
        <View style={styles.bottom}>
        <Text style={styles.bottomText}>Bottom Right</Text>
        </View>
      </View>

    </View>
  )

}

export default App

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#e7feff',
    flex: 1
  },
  containerTop:{
    flex: 1
  },
  containerCenter:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerBottom:{
    flex: 1
  },
  top:{
    marginTop: 80,
    marginHorizontal: 40,
    backgroundColor: 'pink',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: 'red'
  },
  topText: {
    fontSize: 20,
    color: 'blue',
    fontWeight: 'bold'
  },
  center:{
    width: 150,
    height: 150,
    backgroundColor: '#33ff60',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  centerText:{

  },
  bottom:{
    marginTop: 80,
    marginHorizontal: 40,
    backgroundColor: '#7ee6fd',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 20
  },
  bottomText:{
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'right'
  }

})