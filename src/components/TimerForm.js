import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text, TextInput} from 'react-native';

import TimerButton from './TimerButton';

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: 'white',
    borderColor: '#D6D7DA',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    margin: 15,
    marginBottom: 0,
  },
  attributeContainer: {
    marginVertical: 8,
  },
  textInputTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  textInputContainer: {
    borderColor: '#D6D7DA',
    borderRadius: 2,
    borderWidth: 1,
    marginBottom: 5,
  },
  textInput: {
    height: 30,
    padding: 5,
    fontSize: 12,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default function TimerForm({id, title, project, onSubmit, onCancel}) {
  const submitText = id ? 'Update' : 'Create';

  const [formTitle, setFormTitle] = useState(id ? title : '');
  const [formProject, setFormProject] = useState(id ? project : '');

  const handleSubmit = () =>
    onSubmit({id, title: formTitle, project: formProject});

  return (
    <View style={styles.formContainer}>
      <View style={styles.attributeContainer}>
        <Text style={styles.textInputTitle}>Title</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            underlineColorAndroid="transparent"
            value={formTitle}
            onChangeText={text => setFormTitle(text)}
          />
        </View>
      </View>
      <View style={styles.attributeContainer}>
        <Text style={styles.textInputTitle}>Project</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            underlineColorAndroid="transparent"
            value={formProject}
            onChangeText={text => setFormProject(text)}
          />
        </View>
      </View>
      <View style={styles.buttonGroup}>
        <TimerButton
          small
          color="#21BA45"
          title={submitText}
          onPress={handleSubmit}
        />
        <TimerButton small color="#DB2828" title="Cancel" onPress={onCancel} />
      </View>
    </View>
  );
}

TimerForm.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  project: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

TimerForm.defaultProps = {
  id: null,
  title: '',
  project: '',
};
