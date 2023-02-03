import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';
import afang2 from '../../assets/afang2.avif';



const OUR_FOODS = [
    {
        id: 'meal1',
        name: 'Afang soup',
        image: afang2,
        description: '1L bowl, Afang soup with goat meat. Includes mfi, pomo, stockfish and dry fish',
        price: '₦6,500',
        minimumOrder: '3',
    },
    {
        id: 'meal2',
        name: 'Afang soup',
        description: '1.5L bowl, Afang soup with goat meat. Includes mfi, pomo, stockfish and dry fish',
        price: '₦11,000',
    },
    {
        id: 'meal3',
        name: 'Afang soup',
        description: '2L bowl, Afang soup with goat meat. Includes mfi, pomo, stockfish and dry fish',
        price: '₦15,000',
    },
    {
        id: 'meal4',
        name: 'Afang soup',
        // image: ''
        description: '2.5L bowl, Afang soup with goat meat. Includes mfi, pomo, stockfish and dry fish',
        price: '₦18,000',
    },
    {
        id: 'meal5',
        name: 'Afang soup',
        description: '1L bowl, Afang soup with beef. Includes mfi, pomo, stockfish and dry fish',
        price: '₦6,000',
        minimumOrder: '3',
    },
    {
        id: 'meal6',
        name: 'Afang soup',
        description: '1.5L bowl, Afang soup with beef. Includes mfi, pomo, stockfish and dry fish',
        price: '₦10,500',
    },
    {
        id: 'meal7',
        name: 'Afang soup',
        description: '2L bowl, Afang soup with beef. Includes mfi, pomo, stockfish and dry fish',
        price: '₦14,500',
    },
    {
        id: 'meal8',
        name: 'Afang soup',
        description: '2.5L bowl, Afang soup with beef. Includes mfi, pomo, stockfish and dry fish',
        price: '₦17,500',

    },
    {
        id: 'meal9',
        name: 'Edikang Ikong soup',
        description: '1L bowl, Edikang Ikong soup with goat meat. Includes mfi, pomo, stockfish and dry fish',
        price: '₦6,500',
        minimumOrder: '3',
    },
    {
        id: 'meal10',
        name: 'Ekpang Nkukwo',
        description: '1.4L bowl, Ekpang Nkukwo. Grated cocoyam cooked with palm oil, mfi, dry fish, smoked fish and pomo',
        price: '₦10,000',
        minimumOrder: '2',
    },
    {
        id: 'meal11',
        name: 'Ekpang Nkukwo',
        description: '2L bowl, Ekpang Nkukwo. Grated cocoyam cooked with palm oil, mfi, dry fish, smoked fish and pomo',
        price: '₦14,500',
    },
    {
        id: 'meal12',
        name: 'Ekpang Nkukwo',
        description: '2.5L bowl, Ekpang Nkukwo. Grated cocoyam cooked with palm oil, mfi, dry fish, smoked fish and pomo',
        price: '₦17,500',
    },
    {
        id: 'meal13',
        name: 'Nkwobi',
        description: '1.4 bowl, Nkwobi. Bite-sized Cowleg meat, slowly cooked, in palmoil, fresh pepper, onions, ugba and pomo',
        price: '₦13,000',
    },
    {
        id: 'meal14',
        name: 'Isiewu',
        description: '1L bowl, Isiewu. Bite-sized goat head, slowly cooked, in palmoil, fresh pepper, onions, ugba and pomo',
        price: '₦6,500',
        minimumOrder: '2',
    }
    
]


const AvailableMeals = () => {
  const mealsList = OUR_FOODS.map((meal)=> <MealItem
  id={meal.id}
  key={meal.id}
  name={meal.name}
  description={meal.description}
  price={meal.price}
  minimumOrder={meal.minimumOrder}
  
  />)
  return (
    <section className={classes.meals}>
      <ul>
        {mealsList}
      </ul>

    </section>
  )
}

export default AvailableMeals