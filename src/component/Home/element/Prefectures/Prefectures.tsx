import React from 'react'

import {Prefecture} from '@/component/Home/element/Prefectures/element/Prefecture'
import type {PrefectureType} from '@/type/PrefectureType'

type PrefecturesProps = {
  prefectures: PrefectureType[]
}

/**
 * @package
 */

export const Prefectures: React.FC<PrefecturesProps> = ({prefectures}) => {
  return (
    <ul className='grid w-full grid-cols-auto-fit gap-2'>
      {prefectures?.map((prefecture: PrefectureType) => {
        return (
          <Prefecture
            key={prefecture.prefCode}
            prefCode={prefecture.prefCode}
            prefName={prefecture.prefName}
          />
        )
      })}
    </ul>
  )
}
