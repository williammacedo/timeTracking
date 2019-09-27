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

export default function ToggleableTimerForm({onFormSubmit}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const handleSubmit = timer => {
    onFormSubmit(timer);
    setIsOpen(!isOpen);
  };

  return (
    <View style={[styles.container, !isOpen && styles.buttonPadding]}>
      {isOpen ? (
        <TimerForm onCancel={toggle} onSubmit={handleSubmit} />
      ) : (
        <TimerButton title="+" color="black" onPress={toggle} />
      )}
    </View>
  );
}

ToggleableTimerForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
