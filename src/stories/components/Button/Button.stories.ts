import type { Meta,StoryObj} from '@storybook/vue3'

import Button from './Button.vue'

const meta: Meta<typeof Button> = {
  title: 'components/Button',
  component: Button,
  argTypes: {
    type: {control: 'select', options: ['link', 'text','default','ghost','dashed']}
  },
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Type: Story = {
  args: {
    type: 'default'
  }
}
