import type {Meta, StoryObj} from '@storybook/vue3';

import Alert from './Alert.vue';

// eslint-disable-next-line storybook/story-exports
const meta: Meta<typeof Alert> = {
  title: "components/Alert",
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    type: {control: 'select', options: ['success', 'info', 'wraning','error']}
  },
  args: {
    prefixCls: '',
  }

}

export default meta;

type Story = StoryObj<typeof meta>;

export const Description: Story = {
  args: {
    description: '描述'
  }
}

