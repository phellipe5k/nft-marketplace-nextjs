import { Meta, Story } from '@storybook/react';
import NftRow from '.';

export default {
  title: 'NftRow',
  component: NftRow,
  args: {
    title: 'NftRow'
  }
} as Meta;

export const Basic: Story = (args) => <NftRow {...args} />;
