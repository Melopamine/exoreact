import { Link } from 'react-router-dom';

const CategoryList = ({ categories }) => {
  return (
    <ul>
      {categories.map(category => (
        <li key={category.id}>
          <Link to={`/category/${category.id}`}>{category.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
