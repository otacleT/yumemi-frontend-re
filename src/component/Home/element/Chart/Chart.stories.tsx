import type {Meta, StoryObj} from '@storybook/react'

import {Chart} from '.'

const meta: Meta<typeof Chart> = {
  title: 'Chart',
  component: Chart,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Chart>

export const Primary: Story = {}
