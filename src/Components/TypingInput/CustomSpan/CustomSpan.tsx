import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import { nanoid } from 'nanoid'
import styles from '../style.module.css'

const cx = classNames.bind(styles)

const CustomSpan = ({ letter }: { letter: string }) => {
  const [isActive, setIsActive] = useState<boolean>(false)
  const className = cx('word', {
    isActiveWord: isActive
  })

  const check = (word?: string): void => {
    console.log(word)
    setIsActive((prevState) => !prevState)
  }
  const keyChecker = (event: any) => {
    // event.preventDefault()
    if (event.key === letter) {
      setIsActive(false)
      console.log('work')
    }
    console.log(event, 'key')
  }
  return (
    <span className={className} onClick={() => check(letter)} onKeyUp={keyChecker} tabIndex={0}>
      {letter}
    </span>
  )
}

export default CustomSpan
