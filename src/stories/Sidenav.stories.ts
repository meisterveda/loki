import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import type { Story, Meta } from '@storybook/angular';

import { SidenavComponent } from 'src/app/ui/sidenav/sidenav.component';

export default {
  title: 'UI/Sidenav',
  component: SidenavComponent,
} as Meta;

export const Sidenav: Story = () => ({
  props: {
    label: 'Sidenav',
    primary: true,
  },
});
