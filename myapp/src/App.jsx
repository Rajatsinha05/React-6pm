import Counter from "./Counter";
import ProductList from "./ProductList";
import Profile from "./Profile";

const App = () => {
  let users = [
    {
      img: "https://thumbs.dreamstime.com/z/relaxing-ginger-cat-hammock-sunset-tropical-beach-paradise-wearing-sunglasses-relaxes-stunning-348790734.jpg",
      role: "full stack",
      height: "400px",
    },
    {
      img: "https://cdn.pixabay.com/photo/2022/09/19/20/39/cat-7466429_640.jpg",
      role: "backend",
      height: "400px",
      width: "500px",
    },
    {
      img: "https://cdn.pixabay.com/photo/2022/09/19/20/39/cat-7466429_640.jpg",
      role: "backend",
      height: "400px",
      width: "500px",
    },

    {
      img: "https://cdn.pixabay.com/photo/2022/09/19/20/39/cat-7466429_640.jpg",
      role: "backend",
      height: "400px",
      width: "500px",
    },
  ];
  return (
    <div>
      <h1>App</h1>
     <Counter initial={10}/>
     <Counter initial="20"/>
     <Counter initial="30"/>
    </div>
  );
};

export default App;
