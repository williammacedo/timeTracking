import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text} from 'react-native';

import {millisecondsToHuman} from '../utils/TimerUtils';
import TimerButton from './TimerButton';

const styles = StyleSheet.create({
  timerContainer: {
    backgroundColor: 'white',
    borderColor: '#d6d7da',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    margin: 15,
    marginBottom: 0,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  elapsedTime: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 15,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default function Timer({
  title,
  project,
  elapsed,
  isRunning,
  onEdit,
  onRemove,
  onStartStop,
}) {
  const elapsedString = millisecondsToHuman(elapsed);
  return (
    <View style={styles.timerContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text>{project}</Text>
      <Text style={styles.elapsedTime}>{elapsedString}</Text>
      <View style={styles.buttonGroup}>
        <TimerButton color="blue" small title="Edit" onPress={onEdit} />
        <TimerButton color="blue" small title="Remove" onPress={onRemove} />
      </View>
      <TimerButton
        color={isRunning ? '#DB2828' : '#21BA45'}
        title={isRunning ? 'Stop' : 'Start'}
        onPress={onStartStop}
      />
    </View>
  );
}

Timer.propTypes = {
  title: PropTypes.string.isRequired,
  project: PropTypes.string.isRequired,
  elapsed: PropTypes.number.isRequired,
  isRunning: PropTypes.bool.isRequired,
  onEdit: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onStartStop: PropTypes.func.isRequired,
};
