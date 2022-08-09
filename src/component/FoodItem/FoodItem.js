import Food from "./Food";

let MyMeals = [
  {
    id: "b1",
    name: "Special Biryani",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Biryani_of_Lahore.jpg/1024px-Biryani_of_Lahore.jpg",
    description: "Best Biryanis From Across India",
    price: "320",
  },
  {
    id: "b2",
    name: "Chinease",
    src: "https://previews.123rf.com/images/funandrejss/funandrejss1905/funandrejss190500245/123674904-chow-mein-noodles-and-vegetables-dish-with-wooden-chopsticks.jpg",
    description: "Dragon of the East.",
    price: "180",
  },
  {
    id: "b3",
    name: "Fired Rice",
    src: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F03%2F29%2F79543-fried-rice-restaurant-style-mfs-51.jpg",
    description: "Rice that is fried and tastes yum!",
    price: "150",
  },
  {
    id: "b4",
    name: "Chicken Curry",
    src: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2021%2F03%2F10%2Fspicy-chicken-curry-FT-RECIPE0321.jpg",
    description: "Taste chicken like never before",
    price: "380",
  },
];
const FoodItem = () => {
  const items = MyMeals.map((item) => (
    <Food
      title={item.name}
      description={item.description}
      src={item.src}
      price={item.price}
      id={item.id}
      key={item.id}
    />
  ));
  return <div>{items}</div>;
};
export default FoodItem;
