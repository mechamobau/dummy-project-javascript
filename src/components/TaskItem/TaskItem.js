import React from 'react';

import PropTypes from 'prop-types';

import styled from 'styled-components';

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

const TaskItem = (props) => {
  const { title, checked, onTaskCheck, id } = props;

  return (
    <ContainerItem>
      <Checkbox
        type="checkbox"
        checked={checked}
        onChange={() => onTaskCheck(id)}
      />
      <Title>{title}</Title>
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
  onTaskCheck: PropTypes.func.isRequired,
};

export default TaskItem;
