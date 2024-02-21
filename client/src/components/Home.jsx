import { useSelector,useDispatch } from "react-redux";
import HomeCard from "./HomeCard";
import CardCategory from "./cardCategory";
import { BeatLoader } from "react-spinners";
import { setLoading } from "../redux/productSlice";
import { useEffect } from "react";

const Home = () => {
  const dispatch = useDispatch()
  const productData = useSelector((state) => state.product.products);
  const isLoading = useSelector((state) => state.product.isLoading);
  console.log(productData);
  const homeProductCartList = productData.slice(0, 4);
  const homeComputers = productData.filter((el) => el.category === "Computer");
  const homePhones = productData.filter((el) => el.category ==="Phones")
  const homeToolkit = productData.filter((el) => el.category === "Toolkit")
  console.log(homeComputers);

  useEffect(() => {
    // Simulez le démarrage d'une opération de chargement après le rendu initial
    const timeout = setTimeout(() => {
      dispatch(setLoading(true));
    }, 4000);

    // Nettoyez le timeout lorsque le composant est démonté ou lorsque l'opération est terminée
    return () => {
      clearTimeout(timeout);
      dispatch(setLoading(false));
    };
  }, [dispatch]);

  return (
    <div className="p-2 md:p-4">
      {/* Section de bienvenue et livraison */}
      <section className="md:flex gap-4 py-2">
        {/* Texte de bienvenue */}
        <div className="md:w-1/2">
          <div className="flex gap-3 bg-green-100 w-36 px-2 items-center rounded-full">
            <p className="text-sm font-medium text-slate-900">Bike Delivery</p>
            <img
              className=" bg-red-700 h-7"
              src="https://imagedelivery.net/5MYSbk45M80qAwecrlKzdQ/d429c062-acad-4c97-ad42-23e80ea99200/thumbnail?v=2024011418"
            />
          </div>
          <h1 className="text-4xl md:text-7xl font-bold py-3 ">
            The Fastest Delivery in{" "}
            <span className="text-green-600"> Your home</span>
          </h1>
          <p className="py-3 max-w-xl">
            🌟 Bienvenue sur BNC Market, ladresse incontournable pour une
            expérience shopping exceptionnelle ! 🌟 Chez BNC Market, nous
            croyons en plus quune simple transaction. Nous croyons en la
            création dune véritable connexion avec nos clients, en offrant bien
            plus que des produits exceptionnels. Entrez dans un monde où le
            shopping devient une aventure, où chaque clic vous rapproche de la
            qualité, du style et de linnovation.
          </p>
          <button className="font-bold bg-green-600 rounded-full px-4 py-2">
            Order Now
          </button>
        </div>

        {/* Cartes de produits */}
        <div className="md:w-1/2 flex flex-wrap gap-3 p-4 justify-center">
        {!isLoading ? (
          <div className="flex justify-center items-center h-screen">
            <BeatLoader color={"#62CB64"} loading={!isLoading} />
          </div>
        ) : (
          homeProductCartList.map((el, index) => (
            <HomeCard
              key={index}
              image={el.image}
              name={el.name}
              category={el.category}
              price={el.price}
            />
          ))
        )}
        </div>
      </section>

      {/* Section ordinateurs */}
      <section>
        <h2 className="font-bold text-2xl text-green-900">Our Computers</h2>
        <div className="flex gap-5">
          {!isLoading ?(
            <div className="flex justify-center items-center h-screen">
              <BeatLoader color={"#62CB64"} loading={!isLoading} />
            </div>
          ):homeComputers.map((el, index) => {
            return (
              <CardCategory
                key={index}
                image={el.image}
                name={el.name}
                category={el.category}
                price={el.price}
              />
            );
          })}
        </div>
      </section>

      {/* Section Telephone */}
      <section>
        <h2 className="font-bold text-2xl text-green-900 pt-2 mt-3">Our Phones</h2>
        <div className="flex gap-5">
        {!isLoading ?(
          <div className="flex justify-center items-center h-screen">
            <BeatLoader color={"#62CB64"} loading={!isLoading} />
          </div>
        ):homePhones.map((el, index) => {
          return (
            <CardCategory
              key={index}
              image={el.image}
              name={el.name}
              category={el.category}
              price={el.price}
            />
          );
        })}
      </div>
      </section>

       {/* Section Toolkit */}
       <section>
       <h2 className="font-bold text-2xl text-green-900 pt-2 mt-3">Toolkits</h2>
       <div className="flex gap-5">
       {!isLoading ?(
         <div className="flex justify-center items-center h-screen">
           <BeatLoader color={"#62CB64"} loading={!isLoading} />
         </div>
       ):homeToolkit.map((el, index) => {
         return (
           <CardCategory
             key={index}
             image={el.image}
             name={el.name}
             category={el.category}
             price={el.price}
           />
         );
       })}
     </div>
     </section>
    </div>
  );
};

export default Home;
