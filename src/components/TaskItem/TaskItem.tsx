import React from 'react';

import PropTypes from 'prop-types';

import styled from 'styled-components';
import { useTasks } from '../../hooks/useTasks';

const Checkbox = styled.input`
  margin-right: 15px;
  width: 1.5rem;
  height: 1.5rem;
`;

const Title = styled.h2`
  font-size: 1.25rem;
`;

const ContainerItem = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 15px;
`;

const RemoveButton = styled.button`
  background: transparent;
  border: 0 none transparent;

  &:hover {
    cursor: pointer;
  }

  &:before {
    content: 'X';
  }
`;

type Props = {
  id: string;
  title: string;
  checked: boolean;
};

const TaskItem = (props: Props) => {
  const { title, checked, id } = props;

  const { selectTask, deselectTask, removeTask } = useTasks();

  return (
    <ContainerItem>
      <Checkbox
        type="checkbox"
        checked={checked}
        onChange={() => (!checked ? selectTask(id) : deselectTask(id))}
      />
      <Title>{title}</Title>
      <RemoveButton
        title="Remover tarefa"
        onClick={() => {
          if (confirm('Tem certeza que deseja remover a tarefa?')) {
            removeTask(id);
          }
        }}
      />
    </ContainerItem>
  );
};

TaskItem.defaultProps = {
  checked: false,
};

TaskItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  checked: PropTypes.bool,
};

export default TaskItem;
