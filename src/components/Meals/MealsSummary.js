import classes from './MealsSummary.module.css';


const MealsSummary = () => { 
    return (
     <section className={classes.summary}>
        <h2>Delicious Food, Delivered To You</h2>
        <p>
            Choose your favorite meal from our broad section of available meals
            and enjoy a delicious lunch or dinner at home

        </p>
        <p>
            All meals are cooked with high-quality ingredients
        </p>

    </section>
    );
}

export default MealsSummary;