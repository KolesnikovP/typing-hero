import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import { observer } from 'mobx-react-lite'
import styles from './style.module.css'
import { useStores } from '../../../hooks/storeHooks'

const cx = classNames.bind(styles)

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
    const className = cx('letter', {
      isActiveWord: number === indexForCheck,
      isTaped: number < indexForCheck,
      isMistake: isMistake && number === indexForCheck
    })

    return <span className={className}>{letterInGameArray}</span>
  }
)

export default CustomSpan
