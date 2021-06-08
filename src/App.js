import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TaskInputBar from './components/TaskInputBar/TaskInputBar';
import TasksList from './components/TasksList/TasksList';
import TasksListWrapper from './components/TasksListWrapper/TasksListWrapper';
import COLORS from './constants/colors';
import { TaskInputBarProvider } from './hooks/useTaskInputBar';
import { TasksProvider } from './hooks/useTasks';

const GlobalStyle = createGlobalStyle`
  * {
    outline: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: ${COLORS.primary};
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
  }

  html, body, #root {
    height: 100%;
  }
`;

export default function App() {
  return (
    <TasksProvider>
      <TaskInputBarProvider>
        <>
          <GlobalStyle />
          <TaskInputBar />
          <TasksListWrapper>
            <TasksList />
          </TasksListWrapper>
        </>
      </TaskInputBarProvider>
    </TasksProvider>
  );
}
