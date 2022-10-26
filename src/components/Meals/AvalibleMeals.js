import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';


const DUMMY_MEALS = [
{
    id: 'm1',
    name: 'Sushi',
    description: 'Finnest',
    price: '120',
},
{
    id: 'm2',
    name: 'Fried Chicken',
    description: 'Fried',
    price:'80',
},
{
    id: 'm3',
    name: 'Burger',
    description: 'American Burger',
    price: '100',

},
{
    id: 'm4',
    name: 'Pizza',
    description: 'Pizza with ham',
    price: '220',
},


]

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => (
        <MealItem 
        key={meal.id}
        name={meal.name} 
        description={meal.description} 
        price={meal.price}/>));

    return (
    <section className={classes.meals}>
        <Card>
        <ul>
            {mealsList}
        </ul>
        </Card>
    </section>
    );
};


export default AvailableMeals