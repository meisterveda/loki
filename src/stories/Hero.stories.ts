import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import type { Story, Meta } from '@storybook/angular';

import { HeroComponent } from 'src/app/ui/hero/hero.component';

export default {
  title: 'UI/Hero',
  component: HeroComponent,
} as Meta;

export const Hero: Story = () => ({
  props: {
    label: 'Hero',
    primary: true,
  },
});
