import React, { useRef, useState } from 'react'
import Input from '../../UI/Input'
import classes from './MealItem.module.css'
const MealItemForum = ({ onAddToCart }) => {
  const amountInputRef = useRef()
  const [amountIsValid, setAmountIsValid] = useState(true)
  const submitHandler = (e) => {
    e.preventDefault()

    const enteredAmount = amountInputRef.current.value
    const enteredAmountNumber = +enteredAmount
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false)
      return
    }
    onAddToCart(enteredAmountNumber)
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: 'amount',
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button className={classes.button}>Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  )
}
export default MealItemForum
