import type { Meta, StoryObj } from '@storybook/react'
import { TrendIndicator } from '@/components/shared/charts/trend-indicator'

const meta: Meta<typeof TrendIndicator> = {
  title: 'Shared/Charts/TrendIndicator',
  component: TrendIndicator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TrendIndicator>

export const TrendingUp: Story = {
  args: {
    value: '+12.5%',
    trend: 'up',
  },
}

export const TrendingDown: Story = {
  args: {
    value: '-2.4%',
    trend: 'down',
  },
}

export const Neutral: Story = {
  args: {
    value: '0.0%',
    trend: 'neutral',
  },
}

export const WithoutIcon: Story = {
  args: {
    value: '15.0%',
    trend: 'up',
    showIcon: false,
  },
}
