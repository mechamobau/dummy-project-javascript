import { useState } from 'react';
import constate from 'constate';

const [TaskInputBarProvider, useTaskInputBar] = constate(() => {
  const [show, setShow] = useState();

  return { show, setShow };
});

export { TaskInputBarProvider, useTaskInputBar };
