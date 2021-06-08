import React, { useState } from 'react';
import styled from 'styled-components';

import { useTaskInputBar } from '../../hooks/useTaskInputBar';
import { useTasks } from '../../hooks/useTasks';

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputText = styled.input`
  font-size: 3rem;
  padding: 1.25rem 1.6rem;
  border-radius: 12px;
  border: 0 none transparent;
`;

const Form = styled.form``;

const TaskInputBar = (props) => {
  const [task, setTask] = useState('');

  const { show, setShow } = useTaskInputBar();

  const { createTask } = useTasks();

  return show ? (
    <Container>
      <Form
        onSubmit={(ev) => {
          ev.preventDefault();
          if (task !== '') {
            createTask({ title: task });
            setShow(false);
            setTask('');
          }
        }}
      >
        <InputText
          placeholder="Ex: Fazer café"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          autoFocus
        />
      </Form>
    </Container>
  ) : null;
};

export default TaskInputBar;
