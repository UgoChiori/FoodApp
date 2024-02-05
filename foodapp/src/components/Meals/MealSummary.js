import classes from './MealSummary.module.css';



const MealSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Efik Cuisine, Delivered To You</h2>
      <p>
        Choose your favorite Efik/Ibibio meals and Igbo delicacies from our broad selection of available meals,
        and enjoy a sumptuous meal at home.
      </p>
        <p>
        All our meals are freshly made with the best ingredients, and
        of course, made with love! 
        </p>
    </section>
  );
};

export default MealSummary;
