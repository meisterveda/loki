import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import type { Story, Meta } from '@storybook/angular';

import { FeatureComponent } from 'src/app/ui/feature/feature.component';

export default {
  title: 'UI/Feature',
  component: FeatureComponent,
} as Meta;

export const Feature: Story = () => ({
  props: {
    label: 'Feature',
    primary: true,
  },
});
