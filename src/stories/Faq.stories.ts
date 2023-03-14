import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import type { Story, Meta } from '@storybook/angular';

import { FaqComponent } from 'src/app/ui/faq/faq.component';

export default {
  title: 'UI/Faq',
  component: FaqComponent,
} as Meta;

export const Faq: Story = () => ({
  props: {
    label: 'Faq',
    primary: true,
  },
});
