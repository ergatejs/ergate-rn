/**
 * @format
 */

import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

interface RootState {
  counter: number;
}

const mapState = (state: RootState) => ({
  counter: state.counter,
});

const mapDispatch = {
  decrement: () => ({type: 'DECREMENT'}),
};

const connector = connect(mapState, mapDispatch);

const HomeScreen = (props: ConnectedProps<typeof connector>) => {
  const {counter, decrement} = props;

  return (
    <View style={styles.home}>
      <Text>{counter}</Text>
      <Button title="Decrement" onPress={() => decrement()} />
    </View>
  );
};

export default connector(HomeScreen);
