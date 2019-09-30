import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, KeyboardAvoidingView} from 'react-native';

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
    this.intervalId = undefined;
  }

  componentDidMount() {
    const TIME_INTERVAL = 1000;

    this.intervalId = setInterval(() => {
      const {timers} = this.state;

      this.setState({
        timers: timers.map(timer => {
          const {elapsed, isRunning} = timer;

          return {
            ...timer,
            elapsed: isRunning ? elapsed + TIME_INTERVAL : elapsed,
          };
        }),
      });
    }, TIME_INTERVAL);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
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

  toggleTimer = timerId => {
    this.setState(prevState => {
      const {timers} = prevState;
      return {
        timers: timers.map(timer => {
          const {id, isRunning} = timer;
          if (id === timerId) {
            return {
              ...timer,
              isRunning: !isRunning,
            };
          }
          return timer;
        }),
      };
    });
  };

  handleRemove = id => {
    const {timers} = this.state;
    this.setState({
      timers: timers.filter(timer => timer.id !== id),
    });
  };

  render = () => {
    const {timers} = this.state;
    return (
      <View style={styles.appContainer}>
        <KeyboardAvoidingView
          behavior="height"
          style={styles.timerListContainer}>
          <ScrollView contentContainerStyle={styles.timerList}>
            <ToggleableTimerForm onFormSubmit={this.handleCreateFormSubmit} />
            {timers.map(({title, project, id, elapsed, isRunning}) => (
              <EditableTimer
                key={id}
                id={id}
                title={title}
                project={project}
                elapsed={elapsed}
                isRunning={isRunning}
                onFormSubmit={this.handleUpdateFormSubmit}
                onRemove={this.handleRemove}
                onStartStop={this.toggleTimer}
              />
            ))}
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  };
}

Main.navigationOptions = {
  title: 'Timers',
};
