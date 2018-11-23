import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { config } from './config.js';
import { Button } from 'react-native';
import axios from 'axios';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mylocation: ''
    };
    this.handleGeoCall = this.handleGeoCall.bind(this);
  }

  handleGeoCall(e){
    e.preventDefault();

    axios.post('https://www.googleapis.com/geolocation/v1/geolocate?key='+config.GOOLE_API_KEY)
      .then(res => {
        const response = res.data;
        this.setState({
          mylocation: response
        });
        console.log(this.state.mylocation);
    })

  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Tap on the button to fetch your geolocation</Text>
        <Button
                onPress={this.handleGeoCall}
                title="Locate Me"
                color="#841584"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
