import { Fragment } from "react";
import MealSummary from "./MealSummary";
import AvailableMeals from "./AvailableMeals";


const Menu = () => {
  return (
    <Fragment>
        <MealSummary />
        <AvailableMeals />
    </Fragment>
  )
}

export default Menu