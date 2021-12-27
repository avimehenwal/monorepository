import { Story, Meta } from '@storybook/react';
import { Dot, DotProps } from './dot';

export default {
  component: Dot,
  title: 'Dot',
} as Meta;

const Template: Story<DotProps> = (args) => <Dot {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
