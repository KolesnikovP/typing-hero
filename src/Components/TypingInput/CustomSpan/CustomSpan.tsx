import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import styles from './style.module.css'
import { useStores } from '../../../hooks/storeHooks'
import { classNames } from '../../../shared/lib/classNames/classNames'
import useTheme from '../../../theme/useTheme'

type CustomSpanType = {
  number: number
  letterInGameArray: string | number
  typingText: (string | number)[]
  letterOnKeyUp: string
  indexForCheck: number
  isMistake: boolean
}

const CustomSpan: React.FC<CustomSpanType> = observer(
  ({ letterInGameArray, number, typingText, letterOnKeyUp, indexForCheck, isMistake }) => {
    const { typingStore } = useStores()
    const { theme } = useTheme()

    return (
      <span
        className={classNames(
          styles.letter,
          {
            [styles.isActiveWord]: number === indexForCheck,
            [styles.isTaped]: number < indexForCheck,
            [styles.isMistake]: isMistake && number === indexForCheck
          },
          [theme]
        )}
      >
        {letterInGameArray}
      </span>
    )
  }
)

export default CustomSpan
