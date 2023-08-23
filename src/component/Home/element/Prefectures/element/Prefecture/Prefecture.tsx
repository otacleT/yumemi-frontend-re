import React from 'react'

import {useColor} from '@/component/Home/element/Prefectures/element/Prefecture/hook/useColor'
import {usePrefecture} from '@/component/Home/element/Prefectures/element/Prefecture/hook/usePrefecture'
import type {PrefectureType} from '@/type/PrefectureType'

type PrefectureProps = PrefectureType

/**
 * @package
 */
export const Prefecture: React.FC<PrefectureProps> = ({prefCode, prefName}) => {
  const prefColor = useColor(prefName)
  const {handleSelect, isChecked, isLoading} = usePrefecture()
  return (
    <li>
      <button
        onClick={() => {
          handleSelect({prefCode, prefName})
        }}
        disabled={isLoading}
        className={`
        flex
        h-8
        w-full
        items-center
        justify-center
        rounded-full
        border-2
        text-sm
        before:mr-1
        before:flex
        before:h-5
        before:w-5
        before:items-center
        before:justify-center    
        before:text-xl
        md:h-9
        md:text-base
        ${
          isLoading
            ? 'pointer-events-none before:animate-spin before:rounded-full before:border-2 before:border-gray-200 before:border-t-[#41a4fd] before:content-[""]'
            : `${
                isChecked
                  ? `before:content-["✓"] ${prefColor}`
                  : 'border-gray-200 before:content-["＋"]'
              }`
        }
        `}
      >
        {prefName}
      </button>
    </li>
  )
}
