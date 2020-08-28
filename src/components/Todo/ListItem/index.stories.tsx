import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
// components
import CenterWrap from '@atom/wrap/Center';
import TodoItem from '.';

export default {
  title: 'TODOS/TODO/List Item',
  component: TodoItem,
  decorators: [
    withKnobs,
    (storyFn: any) => (
      <CenterWrap style={{ padding: 0 }}>{storyFn()}</CenterWrap>
    ),
  ],
};

export const standard = () => <TodoItem />;