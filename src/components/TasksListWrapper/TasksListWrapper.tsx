import React from 'react';
import styled from 'styled-components';
import COLORS from '../../constants/colors';
import NewTaskButton from '../NewTaskButton/NewTaskButton';

export const TOP_OVERLAP = 50;

const Container = styled.main`
  display: block;
  max-width: 1200px;
  margin: 0 auto;
  transform: translateY(${TOP_OVERLAP}px);
  padding: 25px 30px;
  background-color: ${COLORS.background};
  border-radius: 5px;
  width: 100%;
  height: calc(100% - ${TOP_OVERLAP * 2}px);
  position: relative;
`;

const Title = styled.h1`
  color: ${COLORS.primary};
  margin-bottom: 15px;
`;

/**
 *
 * @param {Object} props
 * @param {JSX.Element} props.children
 * @returns
 */
const TasksListWrapper = (props) => {
  const { children } = props;

  return (
    <Container>
      <Title>Suas tarefas</Title>
      {children}
      <NewTaskButton />
    </Container>
  );
};

export default TasksListWrapper;
