import React, { useCallback } from 'react';

import styled from 'styled-components';
import COLORS from '../../constants/colors';
import { useTaskInputBar } from '../../hooks/useTaskInputBar';

const Button = styled.button`
  background: ${COLORS.primary};
  color: #ffffff;
  border-radius: 25px;
  width: 50px;
  height: 50px;
  border-color: ${COLORS.primary};
  border-style: solid;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 20px;
  right: 20px;

  &:hover {
    cursor: pointer;
  }

  &:before,
  &:after {
    content: '';
    height: 25px;
    width: 4px;
    display: block;
    background: #ffffff;
    border-radius: 3px;
  }

  &:before {
    transform: translateX(2px);
  }

  &:after {
    transform: rotate(90deg) translateY(1px);
    transform-origin: center;
  }
`;

const NewTaskButton = () => {
  const { setShow } = useTaskInputBar();

  const handleButtonClick = useCallback(() => {
    setShow(true);
  }, [setShow]);

  return <Button title="Nova tarefa" onClick={handleButtonClick} />;
};

export default NewTaskButton;
