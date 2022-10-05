import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import { observer } from 'mobx-react-lite'
import styles from './style.module.css'
import { useStores } from '../../../hooks/storeHooks'

const cx = classNames.bind(styles)

type CustomSpanType = {
  number: number
  letter: string | number
  isActive: boolean
}

const CustomSpan: React.FC<CustomSpanType> = observer(({ letter, isActive = false, number = 0}) => {
  // console.log(number, 'number');
  // console.log(letter, 'letter');
  
    const { typingStore } = useStores()
    const className = cx('letter', {
      // number === 0 нужен чтобы в начале игры первая буква сразу мигала
      isActiveWord: isActive || number === 0 
    })
  return <span className={className}>{letter}</span>
})

export default CustomSpan
