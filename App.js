import React, {Component} from 'react';
import { Text, View, StyleSheet} from 'react-native';
import Moment from 'moment';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { timeNow: this.timeNow() };
  }

  componentDidMount(){
    setInterval(() => {
      this.setState({
        timeNow: this.timeNow(),
      });
    }, 30);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.timeNow}>{this.timeNow()}</Text>
      </View>
    );
  }

  timeNow() {
    return Moment().format('hh:mm:ss');
  }
}

const styles = StyleSheet.create({
  timeNow: {
    textShadowColor: '#0AAFE6',
    textShadowOffset: {
      width: 0,
      height: 0
    },
    textShadowRadius: 10,
    fontSize: 70,
    color: '#daf6ff'
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});