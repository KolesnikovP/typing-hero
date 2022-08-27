import React, { useState } from 'react'
import classNames from 'classnames/bind'
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

  return (
    <>
      <span className={className} onClick={() => check(letter)}>
        {letter}
      </span>
    </>
  )
}

export default CustomSpan
