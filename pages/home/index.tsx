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

const mapState = (state: RootState) => ({
  counter: state.counter,
});

const mapDispatch = {
  decrement: () => ({type: 'DECREMENT'}),
  incrementAsync: (payload: any) => ({type: 'INCREMENT_ASYNC', payload}),
};

const connector = connect(mapState, mapDispatch);

const HomeScreen = (props: ConnectedProps<typeof connector>) => {
  const {counter, decrement, incrementAsync} = props;

  return (
    <View style={styles.home}>
      <Text>{counter.count}</Text>
      <Button title="Decrement" onPress={() => decrement()} />
      <Button title="IncrementAsync" onPress={() => incrementAsync(2)} />
    </View>
  );
};

export default connector(HomeScreen);

interface RootState {
  counter: {
    count: number;
  };
}
