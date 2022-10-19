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
}

const CustomSpan: React.FC<CustomSpanType> = observer(({ letterInGameArray, number, typingText, letterOnKeyUp, indexForCheck }) => {
  console.log(number, 'number');
  // console.log(letter, 'letter');
  console.log(letterInGameArray, 'letterInGameArray');
  console.log(letterOnKeyUp, 'letterOnKeyUp');
  
  const { typingStore } = useStores()
  const className = cx('letter', {
    // number === 0 нужен чтобы в начале игры первая буква сразу мигала
    // isActiveWord: number === 0 
    isActiveWord: number === indexForCheck
  })

  return <span className={className}>{letterInGameArray}</span>
})

export default CustomSpan
