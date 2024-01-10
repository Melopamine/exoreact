import { useParams } from 'react-router-dom';
import CategoryDetail from '../components/CategoryDetails';

const CategoryDetailsPage = ({ categories }) => {
  const { categoryId } = useParams();
  const category = categories.find(cat => cat.id.toString() === categoryId);

  return <CategoryDetail category={category} />;
};

export default CategoryDetailsPage;
