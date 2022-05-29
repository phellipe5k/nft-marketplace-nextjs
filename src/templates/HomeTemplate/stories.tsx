import { Meta, Story } from '@storybook/react';
import HomeTemplate from '.';

export default {
  title: 'HomeTemplate',
  component: HomeTemplate,
  args: {
    title: 'HomeTemplate'
  }
} as Meta;

export const Basic: Story = (args) => <HomeTemplate {...args} />;
