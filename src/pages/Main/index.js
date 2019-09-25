import React, {Component} from 'react';

import {StyleSheet, View, ScrollView} from 'react-native';

import EditableTimer from '../../components/EditableTimer';
import ToggleableTimerForm from '../../components/ToggleableTimerForm';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  timerList: {
    paddingBottom: 15,
  },
});

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render = () => {
    return (
      <View style={styles.appContainer}>
        <ScrollView style={styles.timerList}>
          <ToggleableTimerForm isOpen={false} />
          <EditableTimer
            id="1"
            title="Mow the lawn"
            project="House Chores"
            elapsed="8986300"
            isRunning
          />
          <EditableTimer
            id="2"
            title="Bake Squash"
            project="Kitchen Chores"
            elapsed="3890985"
            editFormOpen
          />
        </ScrollView>
      </View>
    );
  };
}

Main.navigationOptions = {
  title: 'Timers',
};
