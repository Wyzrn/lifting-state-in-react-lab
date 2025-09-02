// src/components/IngredientList/IngredientList.jsx
const IngredientList = (props) => {
  return (
    <ul>
      {Array.isArray(props.ingredients) ? (
        props.ingredients.map((ingredient, index) => (
          <li key={index} style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
            <button onClick={() => props.addToBurger(ingredient)}>+</button>
          </li>
        ))
      ) : (
        <li>No ingredients available</li>
      )}
    </ul>
  );
};

export default IngredientList;