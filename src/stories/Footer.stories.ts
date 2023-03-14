import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import type { Story, Meta } from '@storybook/angular';

import { FooterComponent } from 'src/app/ui/footer/footer.component';

export default {
  title: 'UI/Footer',
  component: FooterComponent,
} as Meta;

export const Footer: Story = () => ({
  props: {
    label: 'Footer',
    primary: true,
  },
});
