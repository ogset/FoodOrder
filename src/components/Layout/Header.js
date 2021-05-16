import mealsImage from '../../assets/meals.jpg'

import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = ({ onShowCart }) => {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table full of delicious food" />
      </div>
    </>
  )
}

export default Header
