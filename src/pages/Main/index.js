import React, {Component} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';

import uuidv4 from 'uuid/v4';

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

    this.state = {
      timers: [
        {
          title: 'Mow the lawn',
          project: 'House Chores',
          id: uuidv4(),
          elapsed: 5456099,
          isRunning: true,
        },
        {
          title: 'Wash Dishes',
          project: 'House Chores',
          id: uuidv4(),
          elapsed: 8181300,
          isRunning: false,
        },
        {
          title: 'Bake squash',
          project: 'Kitchen Chores',
          id: uuidv4(),
          elapsed: 1273998,
          isRunning: false,
        },
      ],
    };
  }

  render = () => {
    const {timers} = this.state;
    return (
      <View style={styles.appContainer}>
        <ToggleableTimerForm />
        <FlatList
          data={timers}
          renderItem={({item}) => (
            <EditableTimer
              id={item.id}
              title={item.title}
              project={item.project}
              elapsed={item.elapsed}
              isRunning={item.isRunning}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  };
}

Main.navigationOptions = {
  title: 'Timers',
};
