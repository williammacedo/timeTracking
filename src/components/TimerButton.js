import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    minWidth: 100,
    borderWidth: 2,
    borderRadius: 3,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  small: {
    fontSize: 14,
    padding: 5,
  },
  large: {
    fontSize: 16,
    padding: 10,
  },
  elapsedTime: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,
  },
});

export default function TimerButton({color, title, small, onPress}) {
  return (
    <RectButton style={[styles.button, {borderColor: color}]} onPress={onPress}>
      <Text
        style={[
          styles.buttonText,
          small ? styles.small : styles.large,
          {color},
        ]}>
        {title}
      </Text>
    </RectButton>
  );
}

TimerButton.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  small: PropTypes.bool,
  onPress: PropTypes.func,
};

TimerButton.defaultProps = {
  small: false,
  onPress: () => {},
};
