import React from 'react';

import { Text, StyleSheet, ImageBackground } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  instructions: {
    color: '#DDD',
    fontSize: 14,
    marginTop: 20,
    textAlign: 'center',
  },
});

const Main = () => (
  <ImageBackground
    source={{
      uri: 'https://s3-sa-east-1.amazonaws.com/rocketseat-cdn/background.png',
    }}
    style={styles.container}
    resizeMode="cover"
  >
    <Text style={styles.instructions}>Essa é a tela principal da sua aplicação</Text>
  </ImageBackground>
);

export default Main;
