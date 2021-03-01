import React from 'react';
import { Story, Meta } from '@storybook/react/';
import { Accordion, AccordionProps } from '../components/Accordion';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  argTypes: {
    triangleColor: { control: 'color' },
    onClick: { action: 'clicked' }
  },
} as Meta;

const Template: Story<AccordionProps> = (args) => (
  <Accordion {...args}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Vivendum intellegat et qui, ei denique consequuntur vix. Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec. No dicam aperiam vis. Pri posse graeco definitiones cu, id eam populo quaestio adipiscing, usu quod malorum te. Ad doctus gubergren duo, mel te postea suavitate. Scripta periculis ei eam, te pro movet reformidans. Sit fugit nostrum et. Vivendum intellegat et qui, ei denique consequuntur vix. Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec. Unum facilisi duo et. Pri posse graeco definitiones cu, id eam populo quaestio adipiscing, usu quod malorum te. Pri posse graeco definitiones cu, id eam populo quaestio adipiscing, usu quod malorum te. Scripta periculis ei eam, te pro movet reformidans.
    </p>
  </Accordion>
);

export const Default = Template.bind({});
Default.args = {
  title: (<h3>Lorem Ipsum</h3>)
};

export const CustomTriangleColor = Template.bind({});
CustomTriangleColor.args = {
  triangleColor: '#FF0000',
  title: (<h4>Test</h4>)
};
