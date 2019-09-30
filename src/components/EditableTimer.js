import React, {useState} from 'react';
import PropTypes from 'prop-types';

import TimerForm from './TimerForm';
import Timer from './Timer';

export default function EditableTimer({
  id,
  title,
  project,
  elapsed,
  isRunning,
  onFormSubmit,
  onRemove,
  onStartStop,
}) {
  const [editFormOpen, setEditFormOpen] = useState(false);
  const remove = () => onRemove(id);
  const edit = () => setEditFormOpen(true);
  const cancel = () => setEditFormOpen(false);
  const handleSubmit = timer => {
    onFormSubmit(timer);
    setEditFormOpen(false);
  };
  const startStop = () => onStartStop(id);

  if (editFormOpen) {
    return (
      <TimerForm
        id={id}
        title={title}
        project={project}
        onCancel={cancel}
        onSubmit={handleSubmit}
      />
    );
  }
  return (
    <Timer
      id={id}
      title={title}
      project={project}
      elapsed={elapsed}
      isRunning={isRunning}
      onEdit={edit}
      onRemove={remove}
      onStartStop={startStop}
    />
  );
}

EditableTimer.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  project: PropTypes.string.isRequired,
  elapsed: PropTypes.number.isRequired,
  isRunning: PropTypes.bool,
  onFormSubmit: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onStartStop: PropTypes.func.isRequired,
};

EditableTimer.defaultProps = {
  isRunning: false,
};
