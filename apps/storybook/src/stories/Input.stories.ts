import type {Meta, StoryObj} from '@storybook/react-vite';

import {Input} from "@repo/ui/atoms";

const meta: Meta<typeof Input> = {
  title: 'Example/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {type: 'select'},
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    radius: {
      control: {type: 'select'},
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    disabled: {
      control: {type: 'boolean'},
    }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: 'Type here...',
  },
};

