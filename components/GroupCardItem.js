import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class GroupCardItem extends React.Component {
  render() {
    let item = this.props.item
    let name = item ? item.name : 'null name'
    let rankings = item ? item.rankings : []
    let color = item ? item.color : 'red'

    const { navigate } = this.props.navigation
    return (
      <TouchableOpacity onPress={() => navigate('Detail', {item: item})}>
      <View style={styles.container}>
        <View style={[styles.header,{backgroundColor: color}]}/>
        <View style={styles.titleGroupContainer}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.ranking}>{'1: '+rankings[0].name}</Text>
          <Text style={styles.ranking}>{'2: '+rankings[1].name}</Text>
          <Text style={styles.ranking}>{'3: '+rankings[2].name}</Text>
        </View>
      </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    margin: 10,
    marginBottom: 0,
    elevation: 5,
    height: 150
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 5
  },
  group: {
    fontSize: 15,
    margin: 5,
    marginTop: 0
  },
  titleGroupContainer: {
    flex: 2,
  },
  completedContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  header: {
    flex: 1,
  }
});