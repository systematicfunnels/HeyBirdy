import type { Meta, StoryObj } from '@storybook/react'
import { GamifiedBadge } from '@/components/shared/gamification/gamified-badge'
import { Trophy } from 'lucide-react'

const meta: Meta<typeof GamifiedBadge> = {
  title: 'Shared/Gamification/GamifiedBadge',
  component: GamifiedBadge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof GamifiedBadge>

export const Diamond: Story = {
  args: {
    tier: 'Diamond',
  },
}

export const Gold: Story = {
  args: {
    tier: 'Gold',
  },
}

export const Silver: Story = {
  args: {
    tier: 'Silver',
  },
}

export const Bronze: Story = {
  args: {
    tier: 'Bronze',
  },
}

export const WithIcon: Story = {
  args: {
    tier: 'Gold',
    icon: Trophy,
  },
}

export const Large: Story = {
  args: {
    tier: 'Diamond',
    size: 'lg',
  },
}

export const Small: Story = {
  args: {
    tier: 'Newbie',
    size: 'sm',
  },
}
