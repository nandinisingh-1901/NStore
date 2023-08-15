import "./Brands.css";
import OneBrand from "./OneBrand";
import brands from "./brandName";

const Brands = () => {
  return (
    <>
      <div className="brand-section">
        <div>Brands</div>
        <div className="brands">
          {brands.map((item) => (
            <OneBrand key={item.id} name={item.name} image={item.image} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Brands;
