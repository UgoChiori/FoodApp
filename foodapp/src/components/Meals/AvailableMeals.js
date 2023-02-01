import classes from './AvailableMeals.module.css';



const OUR_FOODS = [
    {
        id: 'meal1',
        name: 'afang soup',
        description: '1L bowl, Afang soup with goat meat.',
        price: '₦6,500',
        minimumOrder: '3',
    },
    {
        id: 'meal2',
        name: 'afang soup',
        description: '1.5L bowl, Afang soup with goat meat.',
        price: '₦11,000',
    },
    {
        id: 'meal3',
        name: 'afang soup',
        description: '2L bowl, Afang soup with goat meat.',
        price: '₦15,000',
    },
    {
        id: 'meal4',
        name: 'afang soup',
        description: '2.5L bowl, Afang soup with goat meat.',
        price: '₦18,000',
    },
    {
        id: 'meal5',
        name: 'afang soup',
        description: '1L bowl, Afang soup with beef.',
        price: '₦6,000',
        minimumOrder: '3',
    },
    {
        id: 'meal6',
        name: 'afang soup',
        description: '1.5L bowl, Afang soup with beef.',
        price: '₦10,500',
    },
    {
        id: 'meal7',
        name: 'afang soup',
        description: '2L bowl, Afang soup with beef.',
        price: '₦14,500',
    },
    {
        id: 'meal8',
        name: 'afang soup',
        description: '2.5L bowl, Afang soup with beef.',
        price: '₦17,500',

    },
    {
        id: 'meal9',
        name: 'edikang ikong soup',
        description: '1L bowl, Edikang ikong soup with goat meat.',
        price: '₦6,500',
        minimumOrder: '3',
    }
]


const AvailableMeals = () => {
  const mealsList = OUR_FOODS.map((meal) => <li>{meal.name}</li>)
  return (
    <section className={classes.meals}>

    </section>
  )
}

export default AvailableMeals