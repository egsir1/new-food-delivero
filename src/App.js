import "./App.css";
import Header from "./components/Header";
import { Link } from "react-router-dom";
import MenuContainer from "./components/MenuContainer";
import {
  AccountBalanceWalletRounded,
  Chat,
  Favorite,
  HomeRounded,
  Settings,
  SummarizeRounded,
} from "@mui/icons-material";
import Banner from "./components/Banner";
import SubMenuContainer from "./components/SubMenuContainer";
import MainCard from "./components/MainCard";
import { MenuItems } from "./Data";
import ItemCard from "./components/ItemCard";

function App() {
  return (
    <div className="app">
      {/* Header section */}
      <Header />

      {/* Banner */}
      <div className="banner">
        <Banner />
      </div>

      {/* Main Container */}
      <main className="main">
        <div className="mainContainer"></div>
        <div className="rightMenu"></div>
      </main>

      {/* dishContainer */}
      <div className="dishContainer">
        <div className="menuCard">
          <SubMenuContainer name="Menu Category" />
        </div>
      </div>
      <div className="rowContainer">
        {MenuItems &&
          MenuItems.map((data) => (
            <div key={data.id}>
              <MainCard imgSrc={data.imgSrc} name={data.name} />
            </div>
          ))}

        {/* <div>
          <MainCard
            imgSrc="https://media-cdn.tripadvisor.com/media/photo-s/1c/27/72/61/osh-plov.jpg"
            name="Osh"
          />
        </div>
        <div>
          <MainCard
            imgSrc="https://media-cdn.tripadvisor.com/media/photo-s/1c/27/72/61/osh-plov.jpg"
            name="Osh"
          />
        </div> */}
      </div>
      <div className="dishItemContainer">
        <ItemCard
          imgSrc="https://free4kwallpapers.com/uploads/originals/2015/05/08/shashlik.jpg"
          name="Shashlik"
          ratings="5"
          price="6000"
        />
        <ItemCard
          imgSrc="https://free4kwallpapers.com/uploads/originals/2015/05/08/shashlik.jpg"
          name="Shashlik"
          ratings="5"
          price="6000"
        />
        <ItemCard
          imgSrc="https://free4kwallpapers.com/uploads/originals/2015/05/08/shashlik.jpg"
          name="Shashlik"
          ratings="5"
          price="6000"
        />
      </div>

      {/* Bottom Menu */}

      <div className="bottomMenu">
        <ul id="menu">
          <Link to="/">
            <MenuContainer icon={<HomeRounded />} />
          </Link>
          <Link to="/">
            <MenuContainer icon={<Chat />} />
          </Link>
          <Link to="/">
            <MenuContainer icon={<AccountBalanceWalletRounded />} />
          </Link>
          <Link to="/">
            <MenuContainer icon={<Favorite />} />
          </Link>
          <Link to="/">
            <MenuContainer icon={<SummarizeRounded />} />
          </Link>
          <Link to="/">
            <MenuContainer icon={<Settings />} />
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default App;
