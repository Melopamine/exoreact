const CategoryDetail = ({ category }) => {
  return (
    <div>
      <h2>{category.name}</h2>
      <p><strong>Image Text:</strong> {category.imgText}</p>
      <p>{category.desc}</p>
      <a href="/">Back to Home</a>
    </div>
  );
};

export default CategoryDetail;
