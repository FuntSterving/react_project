import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { ProductList } from "./components/ProductList/ProductList";
import { Form } from "./components/Form/Form";
// import { useTelegram } from './hooks/useTelegram';
import { SpeedDialButton } from "./components/SpeedDialButton/SpeedDialButton";
import {Practice} from './components/Practice/Practice'

const products = [
  {
    id: generateUniqueId(),
    title: "Helicopter#1",
    price: 350000000,
    description: "Летает, не бит не крашен",
    image: "https://kizlyar-kemz.ru/wp-content/uploads/2021/07/proizvoditel-vertoleta-ap55-kizlyar-kemz.jpg",
  },
  {
    id: generateUniqueId(),
    title: "Helicopter#2",
    price: 450000000,
    description: "Летала девушка, один хозяин",
    image: "https://apatas.lt/wp-content/uploads/2020/08/uc.jpg",
  },
  {
    id: generateUniqueId(),
    title: "Helicopter#3",
    price: 550000000,
    description: "Летал только в выходные",
    image: "https://robinsonprice.ru/wp-content/uploads/2021/03/clip-1-450.jpg",
  },
  {
    id: generateUniqueId(),
    title: "Helicopter#4",
    price: 650000000,
    description: "Заливали только ракетное топливо",
    image: "https://rostec.ru/upload/iblock/1ed/wbh4zwif3ofc4c3a1cupss2yfebupqfd.jpg",
  },
  {
    id: generateUniqueId(),
    title: "Helicopter#5",
    price: 750000000,
    description: "Обмен на квартиру",
    image: "https://hightech.fm/wp-content/uploads/2021/12/screenshot_129.png",
  },
  {
    id: generateUniqueId(),
    title: "Helicopter#6",
    price: 850000000,
    description:
      "Торг, обмен, рассрочка, кредит, лизинг",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ66BuCG0gFLwH_bboerZIKAc610chQG0-swURqSDtTLd6FmtgBFEDxX2SKB530SkqScL8&usqp=CAU",
  },
];
function generateUniqueId() {
  return Date.now().toString() + Math.floor(Math.random() * 1000).toString();
}

function App() {
  // const { tg } = useTelegram()

  useEffect(() => {
    const tg = window.Telegram.WebApp;
    tg.ready();
  }, []);

  return (
    <div className="App">
      {/* <Practice /> */}
      <Header>Заголовок</Header>
      <Routes>
        <Route index element={<ProductList products={products} />}></Route>
        <Route path={"form"} element={<Form />}></Route>
      </Routes>
      <SpeedDialButton products={products} />
    </div>
  );
}

export default App;
