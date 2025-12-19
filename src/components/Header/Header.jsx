import { useContext } from "react";
import { SlLocationPin } from "react-icons/sl";
import { Link } from 'react-router-dom'
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import "./Header.css";
import { DataContext } from "../../components/DataProvider/DataProvider";
import LowerHeader from './LowerHeader'



    function Header() {
      
      // const [state, dispatch] = useContext(DataContext);

      const [{user,basket}, dispatch]=useContext(DataContext)
      const totalItem=basket?.reduce((amount,item)=>{
        return item.amount +amount;
      },0)
      console.log("HEADER BASKET:", basket);
      

    
  return (
   
    <>
    <header className="header">
  
      <section className="clas fixed"></section>
      {/* LEFT SIDE */}
      <div className="left">
       
        {/* LOGO */}
        <Link to="/">
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon logo"
            className="logo"
          />
        </Link>

        {/* DELIVER TO */}
        <div className="deliver">
          <SlLocationPin className="locationIcon" />

          <div className="deliverText">
            <p>Deliver to</p>
            <span>Ethiopia</span>
          </div>
        </div>

      </div>

      {/* SEARCH BAR */}
      <div className="search">
        <select className="searchCategory">
          <option>All</option>
        </select>

        <input
          type="text"
          placeholder="Search product"
          className="searchInput"
        />

        <button className="searchButton">
          <BsSearch />
        </button>
      </div>

      {/* RIGHT SIDE */}
      <div className="right">

        {/* LANGUAGE */}
        <div className="language">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
            className="flag"
            alt="flag"
          />
          <select className="langSelect">
            <option>EN</option>
          </select>
        </div>

        {/* ACCOUNT */}
        <Link to="/" className="option">
          <p>Hello, Sign in</p>
          <span>Account & Lists</span>
        </Link>

        {/* ORDERS */}
        <Link to="/orders" className="option">
          <p>Returns</p>
          <span>& Orders</span>
        </Link>
        

        {/* CART */}
        <Link to="/cart" className="cart">
  <BiCart className="cartIcon" />
  <span className="cartCount">{totalItem}</span>
</Link>

      </div>
     

    </header>
    <LowerHeader/>
    </>
  );
  
}

export default Header;