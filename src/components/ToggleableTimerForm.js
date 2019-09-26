import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';

import TimerButton from './TimerButton';
import TimerForm from './TimerForm';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  buttonPadding: {
    paddingHorizontal: 15,
  },
});

export default function ToggleableTimerForm() {
  const [isOpen, setIsOpen] = useState(false);

  const mudarBotao = () => setIsOpen(!isOpen);

  return (
    <View style={[styles.container, !isOpen && styles.buttonPadding]}>
      {isOpen ? (
        <TimerForm />
      ) : (
        <TimerButton title="+" color="black" onPress={mudarBotao} />
      )}
    </View>
  );
}
