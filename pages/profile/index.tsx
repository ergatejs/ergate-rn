/**
 * @format
 */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';

const styles = StyleSheet.create({
  profile: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

interface RootState {
  todos: any;
}

const mapState = (state: RootState) => ({
  todos: state.todos,
});

const connector = connect(mapState);

type Props = ConnectedProps<typeof connector> & {
  title: string;
  dispatch: any;
};

const ProfilePage = (props: Props) => {
  return (
    <View style={styles.profile}>
      <Text>{props.title}</Text>
    </View>
  );
};

export default connector(ProfilePage);
