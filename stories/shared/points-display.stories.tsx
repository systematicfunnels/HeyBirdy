import type { Meta, StoryObj } from '@storybook/react'
import { PointsDisplay } from '@/components/shared/gamification/points-display'

const meta: Meta<typeof PointsDisplay> = {
  title: 'Shared/Gamification/PointsDisplay',
  component: PointsDisplay,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof PointsDisplay>

export const Default: Story = {
  args: {
    points: 1250,
  },
}

export const Large: Story = {
  args: {
    points: '25,000',
    size: 'lg',
    label: 'Total Lifetime Points',
  },
}

export const Small: Story = {
  args: {
    points: 50,
    size: 'sm',
    label: 'Pending',
  },
}

export const WithoutIcon: Story = {
  args: {
    points: 100,
    showIcon: false,
  },
}
