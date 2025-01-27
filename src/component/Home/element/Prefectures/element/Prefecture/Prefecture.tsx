import {css} from '@emotion/react'
import React from 'react'

import {usePrefecture} from '@/component/Home/element/Prefectures/element/Prefecture/hook/usePrefecture'
import {prefColors} from '@/lib/prefColors'
import type {PrefectureNameType, PrefectureType} from '@/type/PrefectureType'

type PrefectureProps = PrefectureType

/**
 * @package
 */
export const Prefecture: React.FC<PrefectureProps> = ({prefCode, prefName}) => {
  const {handleSelect, isChecked, isLoading} = usePrefecture()
  return (
    <li css={item}>
      <button
        onClick={() => {
          handleSelect({prefCode, prefName})
        }}
        disabled={isLoading}
        css={button(isChecked, isLoading, prefName)}
      >
        {prefName}
      </button>
    </li>
  )
}

const item = css`
  height: 36px;
  @media (max-width: 768px) {
    height: 32px;
  }
`

const button = (isChecked: boolean, isLoading: boolean, prefName: PrefectureNameType) => css`
  display: flex;
  height: 36px;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  font-size: 16px;
  color: #000;
  cursor: pointer;
  ${isChecked
    ? `border: 2px solid ${prefColors[prefName]}; color: ${prefColors[prefName]};`
    : 'border: 2px solid #e0e0e0;'}
  ${isLoading && 'pointer-events: none;'}
  :focus-visible {
    border: 2px solid #6b7280;
  }
  ::before {
    display: flex;
    height: 20px;
    width: 20px;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    margin-right: 8px;
    ${isLoading
      ? 'content: ""; animation: spin 1s linear infinite; border-radius: 50%; border: 2px solid #e0e0e0; border-top-color: #41a4fd;'
      : isChecked
      ? `content: "✓";`
      : 'content: "＋";'}
  }
  @media (max-width: 768px) {
    height: 32px;
    font-size: 14px;
    ::before {
      font-size: 16px;
    }
  }
`
