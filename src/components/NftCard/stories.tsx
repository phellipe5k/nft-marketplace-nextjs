import { Meta, Story } from '@storybook/react';
import NftCard from '.';

export default {
  title: 'NftCard',
  component: NftCard,
  args: {
    title: 'NftCard'
  }
} as Meta;

export const Basic: Story = (args) => <NftCard {...args} />;
