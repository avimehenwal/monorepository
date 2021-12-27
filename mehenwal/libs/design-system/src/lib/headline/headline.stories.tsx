import { Story, Meta } from '@storybook/react';
import { Headline, HeadlineProps } from './headline';

export default {
  component: Headline,
  title: 'Headline',
} as Meta;

const Template: Story<HeadlineProps> = (args) => <Headline {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
