import Hello from "./components/Hello";

function Food({ name, picture }) {
  return (
    <div>
      <h1>I like {name}!</h1>
      <img src={picture} alt={name} style={{ width: "500px" }} />
    </div>
  );
}

const foodIlike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://img.khan.co.kr/news/2020/07/21/l_2020072101002491400195811.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Samgypsal",
    image:
      "https://cdn.crowdpic.net/list-thumb/thumb_l_DEB5A5AA517B27F2E587645E8BB9E7D0.jpg",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Ramen",
    image:
      "https://i.pinimg.com/736x/2d/ef/2c/2def2cb2fa7b0fab7d0c4a6be21868a2.jpg",
    rating: 4.8,
  },
  {
    id: 4,
    name: "Soup",
    image: "https://craftlog.com/m/i/1129874=s1280=h960",
    rating: 4.7,
  },
];

function App() {
  return (
    <div className="App">
      {foodIlike.map((food) => (
        <Food name={food.name} picture={food.image} />
      ))}
    </div>
  );
}

export default App;
