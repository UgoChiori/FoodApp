import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import afang2 from "../../assets/afang2.avif";

const OUR_FOODS = [
  {
    id: "meal1",
    name: "Afang soup",
    image: afang2,
    description:
      "0.5 litre bowl, afang soup with goat meat/beef, periwinkles, ponmo, stockfish and dry fish",
    price: 8500,
    // minimumOrder: 'Minimum order: 3',
  },
  {
    id: "meal2",
    name: "Afang soup",
    description:
      "1 litre bowl, afang soup with goat meat/beef, periwinkles, ponmo, stockfish and dry fish",
    price: 12000,
  },
  {
    id: "meal3",
    name: "Afang soup",
    description:
      "1.4 litre bowl, afang soup with goat meat/beef, periwinkles, ponmo, stockfish and dry fish",
    price: 15000,
  },
  {
    id: "meal4",
    name: "Afang soup",
    // image: ''
    description:
      "2 litre bowl, afang soup with goat meat/beef, periwinkles, ponmo, stockfish and dry fish",
    price: 18000,
  },
  {
    id: "meal5",
    name: "Afang soup",
    description:
      "2.4 litre bowl, afang soup with goat meat/beef, periwinkles, ponmo, stockfish and dry fish",
    price: 25500,
    // minimumOrder: 'Minimum order: 3',
  },
  {
    id: "meal6",
    name: "Edikang Ikong",
    description:
      "1.4 litre bowl, edikang ikong soup with goat meat/beef, periwinkles, ponmo, stockfish and dry fish",
    price: 14500,
  },
  {
    id: "meal7",
    name: "Edikang Ikong",
    description:
      "2 litre bowl, edikang ikong soup with goat meat/beef, periwinkles, ponmo, stockfish and dry fish",
    price: 17500,
  },
  {
    id: "meal8",
    name: "Edikang Ikong",
    description:
      "2.4 litre bowl, edikang ikong soup with goat meat/beef, periwinkles, ponmo, stockfish and dry fish",
    price: 17500,
  },
  {
    id: "meal10",
    name: "Ekpang Nkukwo",
    description:
      "1.4 litre bowl, ekpang nkukwo. Grated cocoyam cooked with palm oil, mfi, dry fish, smoked fish and ponmo",
    price: 15000,
  },
  {
    id: "meal11",
    name: "Ekpang Nkukwo",
    description:
      "2 litre bowl, ekpang nkukwo. Grated cocoyam cooked with palm oil, mfi, dry fish, smoked fish and ponmo",
    price: 20000,
  },
  {
    id: "meal12",
    name: "Ekpang Nkukwo",
    description:
      "2.4 litre bowl, ekpang nkukwo. Grated cocoyam cooked with palm oil, mfi, dry fish, smoked fish and ponmo",
    price: 23000,
  },
  {
    id: "meal13",
    name: "Nkwobi",
    description:
      "1.4 litre bowl, nkwobi. Bite-sized Cowleg. Slow cooked in palmoil, fresh pepper, onions, ugba and ponmo",
    price: 16000,
  },
  {
    id: "meal14",
    name: "Isiewu",
    description:
      "1L bowl, isiewu. Bite-sized goat head. Slow cooked in palmoil, fresh pepper,crayfish, onions, ugba and ponmo",
    price: 7500,
  },
  {
    id: "meal15",
    name: "Atama",
    description:
      "1 litre bowl, atama soup. Contains goat meat/beef, periwinkles, ponmo, stockfish, smoked fish and dry fish",
    price: 12000,
  },
  {
    id: "meal16",
    name: "Atama",
    description:
      "1.4 litre bowl, atama soup. Contains goat meat/beef, periwinkles, ponmo, stockfish, smoked fish and dry fish",
    price: 15000,
  },
  {
    id: "meal17",
    name: "Atama",
    description:
      "2 litre bowl, atama soup.  Contains goat meat/beef, periwinkles, ponmo, stockfish, smoked fish and dry fish",
    price: 17500,
  },
  {
    id: "meal18",
    name: "Atama",
    description:
      "2.4 litre bowl, atama soup. Contains goat meat/beef, periwinkles, ponmo, stockfish, smoked fish and dry fish",
    price: 25500,
  },
  {
    id: "meal19",
    name: "Abak Atama",
    description:
      "1.4 litre bowl, abak atama soup.  Contains goat meat/beef, periwinkles, ponmo, stockfish, smoked fish and dry fish",
    price: 14500,
  },
  {
    id: "meal20",
    name: "Abak Atama",
    description:
      "2 litre bowl, abak atama soup.  Contains goat meat/beef, periwinkles, ponmo, stockfish, smoked fish and dry fish",
    price: 17500,
  },
  {
    id: "meal21",
    name: "Abak Atama",
    description:
      "2.4 litre bowl, abak atama soup.  Contains goat meat/beef, periwinkles, ponmo, stockfish, smoked fish and dry fish",
    price: 25000,
  },
  {
    id: "meal22",
    name: "Ukwogho Etidot",
    description:
      "2 litre bowl of bitterleaf soup. Contains goat meat/beef, periwinkles, ponmo, stockfish, smoked fish and dry fish",
    price: 17000,
  },

  {
    id: "meal23",
    name: "Fisherman Soup",
    description:
      "Contains a full fresh fish, nkonko(sea snails), periwinkles, dry fish and smoked fish. Shrimps and Prawns available on request.",
    price: 20000,
  },
  {
    id: "meal24",
    name: "Coconut Rice",
    description:
      "1.4 litre bowl of rice, cooked in creamy fresh coconut milk, with dry fish and smoked fish",
    price: 10000,
  },
  {
    id: "meal25",
    name: "Coconut Rice",
    description:
      "2 litre bowl of rice, cooked in creamy fresh coconut milk, with dry fish and smoked fish",
    price: 12500,
  },
  {
    id: "meal26",
    name: "Native Jollof Rice",
    description:
      "2 litre bowl of rice, cooked in fresh palm oil, with dry fish, smoked fish and bite-sized pieces of ponmo ",
    price: 16000,
  },
  {
    id: "meal27",
    name: "Jollof Rice",
    description:
      "1 litre bowl of rice, cooked with smoked peppers, tomatoes, spices and herbs, and meat stock ",
    price: 6500,
  },
  {
    id: "meal28",
    name: "Jollof Rice",
    description:
      "1.4 litre bowl of rice, cooked with smoked peppers, tomatoes, spices and herbs, and meat stock ",
    price: 8500,
  },
  {
    id: "meal29",
    name: "Jollof Rice",
    description:
      "2 litre bowl of rice, cooked with smoked peppers, tomatoes, spices and herbs, and meat stock ",
    price: 10000,
  },
  {
    id: "meal30",
    name: "Jollof Rice",
    description:
      "2.4 litre bowl of rice, cooked with smoked peppers, tomatoes, spices and herbs, and meat stock ",
    price: 13500,
  },
  {
    id: "meal31",
    name: "White Rice",
    description: "2 litre bowl of soft boiled white rice.",
    price: 5000,
  },
  {
    id: "meal32",
    name: "Chicken Stew",
    description: "Stew made with one whole live broiler chicken",
    price: 25000,
  },
  {
    id: "meal33",
    name: "Chicken Peppersoup",
    description: "Spicy peppersoup made with one whole live broiler chicken",
    price: 20000,
  },
  {
    id: "meal34",
    name: "Fresh Fish stew",
    description: "Stew made with freshly caught fish",
    price: 12000,
  },
  {
    id: "meal35",
    name: "Fresh Fish Peppersoup",
    description: "Spicy peppersoup made with freshly caught fish",
    price: 9000,
  },
  {
    id: "meal36",
    name: "Goat Meat",
    description: "10 pieces of soft, well fried peppered goat meat",
    price: 10000,
  },
  {
    id: "meal37",
    name: "Beef",
    description: "15 pieces of soft, well fried peppered beef",
    price: 10000,
  },
  {
    id: "meal38",
    name: "Turkey",
    description: "4 pieces of soft, well fried peppered turkey",
    price: 13000,
  },
  {
    id: "meal39",
    name: "Chicken",
    description: "6 pieces of soft, well fried peppered chicken",
    price: 8500,
  },
  {
    id: "meal40",
    name: "Fresh Fish",
    description: "3 pieces of fresh fish",
    price: 6500,
  },
  {
    id: "meal41",
    name: "Shaki(Goat)",
    description: "goat offals- towel, intestines, liver, kidney",
    price: 6000,
  },
  {
    id: "meal42",
    name: "Shaki(Beef)",
    description: "cow offals- towel, intestines, liver, kidney",
    price: 6500,
  },
  {
    id: "meal43",
    name: "Snail(3 pieces)",
    description: "Snails",
    price: 7500,
  },
  {
    id: "meal44",
    name: "Cow-tails(3 pieces)",
    description: " Slow cooked cowtail ",
    price: 6000,
  },
  {
    id: "meal45",
    name: "Cow leg(3 pieces)",
    description: " Slow cooked cow leg ",
    price: 7000,
  },
];

const AvailableMeals = () => {
  const mealsList = OUR_FOODS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      minimumOrder={meal.minimumOrder}
    />
  ));
  return (
    <section className={classes.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default AvailableMeals;
