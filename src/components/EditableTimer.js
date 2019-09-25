import React from 'react';
import PropTypes from 'prop-types';

import TimerForm from './TimerForm';
import Timer from './Timer';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

export default function EditableTimer({
  id,
  title,
  project,
  elapsed,
  isRunning,
  editFormOpen,
}) {
  if (editFormOpen) {
    return <TimerForm id={id} title={title} project={project} />;
  }
  return (
    <Timer
      id={id}
      title={title}
      project={project}
      elapsed={elapsed}
      isRunning={isRunning}
      editFormOpen={editFormOpen}
    />
  );
}

EditableTimer.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  project: PropTypes.string.isRequired,
  elapsed: PropTypes.bool,
  isRunning: PropTypes.bool,
  editFormOpen: PropTypes.bool,
};

EditableTimer.defaultProps = {
  elapsed: false,
  isRunning: false,
  editFormOpen: false,
};
