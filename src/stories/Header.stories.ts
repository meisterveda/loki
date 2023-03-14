import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import type { Story, Meta } from '@storybook/angular';

import { HeaderComponent } from 'src/app/ui/header/header.component';

export default {
  title: 'UI/Header',
  component: HeaderComponent,
} as Meta;

export const Header: Story = () => ({
  props: {
    label: 'Header',
    primary: true,
  },
});
