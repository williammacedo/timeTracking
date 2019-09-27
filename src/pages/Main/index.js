import React, {Component} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';

import uuidv4 from 'uuid/v4';

import '../../config/ReactotronConfig';
import {newTimer} from '../../utils/TimerUtils';
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

  handleCreateFormSubmit = timer => {
    const {timers} = this.state;
    this.setState({
      timers: [newTimer(timer), ...timers],
    });
  };

  handleUpdateFormSubmit = attrs => {
    const {timers} = this.state;
    this.setState({
      timers: timers.map(timer => {
        if (timer.id === attrs.id) {
          const {title, project} = attrs;
          return {
            ...timer,
            title,
            project,
          };
        }
        return timer;
      }),
    });
  };

  render = () => {
    const {timers} = this.state;
    return (
      <View style={styles.appContainer}>
        <ToggleableTimerForm onFormSubmit={this.handleCreateFormSubmit} />
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
