const Categories = ({ categories }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button type="button" key={index} className="filter-btn">
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
