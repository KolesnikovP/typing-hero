import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import { observer } from 'mobx-react-lite'
import styles from './style.module.css'
import { useStores } from '../../../hooks/storeHooks'

const cx = classNames.bind(styles)

type CustomSpanType = {
  letter: string
  isActive: boolean
}

const CustomSpan: React.FC<CustomSpanType> = observer(({ letter, isActive }) => {
  const { typingStore } = useStores()
  const className = cx('letter', {
    isActiveWord: isActive
  })
  return <span className={className}>{letter}</span>
})

export default CustomSpan
