import React, { ReactNode } from 'react'

type counterProps = {
    count: number
    setCount: React.Dispatch<React.SetStateAction<number>>
}

const Counter = ({count, setCount, children}: React.PropsWithChildren<counterProps>) => {

    function decreaseCount() {
        if (count > 0) {
            setCount(prev => prev - 1)
        }
    }
    function increaseCount() {
        if (count < 5) {
            setCount(prev => prev + 1)
        }
    }
  return (
    <>
        <h1>{children}</h1>
        <button onClick={increaseCount}>+</button>
        <button onClick={decreaseCount}>-</button>
    </>
  )
}

export default Counter