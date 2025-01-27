import {render, screen} from '@testing-library/react'

import {Prefectures} from '@/component/Home/element/Prefectures'
import type {PrefectureType} from '@/type/PrefectureType'

describe('Prefectures', () => {
  // Arrange
  const prefectures: PrefectureType[] = [
    {
      prefCode: 1,
      prefName: '北海道',
    },
    {
      prefCode: 2,
      prefName: '青森県',
    },
  ]
  test('renders correctly', async () => {
    // Act
    render(<Prefectures prefectures={prefectures} />)

    // Assert
    const prefecturesList = await screen.findAllByRole('listitem')
    expect(prefecturesList).toHaveLength(2)
  })
})
