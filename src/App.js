
import './App.css';
import LoginPage from './components/Auth/LoginPage';
import Footer from './components/FooterPage/Footer';
import HomePage from './components/HomePage/HomePage';
import StorePartner from './components/Partners/StorePartner';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StoreWallet from './components/Partners/StoreWallet';
import FactoryPartner from './components/Partners/FactoryPartner';
import FactoryWallet from './components/Partners/FactoryWallet';

import StoreProduct from './components/Products/StoreProduct';
import FactoryProduct from './components/Products/FactoryProduct';
import StoreDetailes from './components/Store/StoreDetailes';
import FactoryDetailes from './components/Factory/FactoryDetailes';
import FactorySortDetailes from './components/Factory/FactorySortDetailes';
import StoreSortDetalies from './components/Store/StoreSortDetalies';
import FavoritesProducts from './components/Favorites/FavoritesProducts';
import FavoritesSortProducts from './components/Favorites/FavoritesSortProducts';
import FavoriteStores from './components/Favorites/FavoriteStores';
import FavoritesFactory from './components/Favorites/FavoritesFactory';
import NofiticationPage from './components/NotificationPage/NotificationPage';
import ConditionsAndRoles from './components/ConditionsAndRoles/ConditionsAndRoles';
import ContactUs from './components/ContactUsPage/ContactUs';
import PersonaLinformation from './components/ProfilePage/PersonaLinformation';
import PasswordPage from './components/ProfilePage/PasswordPage';
import CartCheckOut from './components/Cart/CartCheckOut';
import CartElectronicWallet from './components/Cart/CartElectronicWallet';
import CartCreditCard from './components/Cart/CartCreditCard';
import AddressPage from './components/Addresses/AddressPage';
import CurrentOrderStore from './components/Orders/CurrentOrderStore';
import CurrentOrderDetailsStore from './components/Orders/CurrentOrderDetailsStore';
import CurrOrderDetailsStore2 from './components/Orders/CurrOrderDetailsStore2';
import CureentOrderFactory from './components/Orders/CureentOrderFactory';
import CurrentOrderDetailsFactory from './components/Orders/CurrentOrderDetailsFactory';
import CurrOrderDetailsFactory2 from './components/Orders/CurrOrderDetailsFactory2';
import FinishedOrderStore from './components/Orders/FinishedOrderStore';
import FinishedOrderDetailsStore from './components/Orders/FinishedOrderDetailsStore';
import FinishedOrderFactory from './components/Orders/FinishedOrderFactory';
import FinishedOrderDetailsFactory from './components/Orders/FinishedOrderDetailsFactory';
import FinshedOrderDetalisFactory2 from './components/Orders/FinshedOrderDetalisFactory2';
import SalesPage from './components/Sales/SalesPage';
import SaleSortPage from './components/Sales/SaleSortPage';
import NewRequsetSupport from './components/TechnicalSupport/NewRequsetSupport';
import NewReqChatPage from './components/TechnicalSupport/NewReqChatPage';
import PreviousReqSupport from './components/TechnicalSupport/PreviousReqSupport';
import PreviousReqChatPage from './components/TechnicalSupport/PreviousReqChatPage';
import PreviousReqChatPage2 from './components/TechnicalSupport/PreviousReqChatPage2';
import BestSeller from './components/BestSeller/BestSeller';
import BestSortSeller from './components/BestSeller/BestSortSeller';
import NewestProducts from './components/TheNewestProducts/NewestProducts';
import NewestProductsSort from './components/TheNewestProducts/NewestProductsSort';
import ProductPageDetails from './components/Products/ProductPageDetails';
import ProductPageDetailsSort from './components/Products/ProductPageDetailsSort';
import ProductPageDetails2 from './components/Products/ProductPageDetails2';
import ProductsPageDetailsSort2 from './components/Products/ProductsPageDetailsSort2';
import HomePageFactory from './components/HomePage/HomePageFactory';
import NavbarLogin from './components/NavBar/NavbarLogin';
import StoreProductUnavailable from './components/Products/StoreProductUnavailable';
import FactoryProductUnavailable from './components/Products/FactoryProductUnavailable';
import HomePageStore from './components/HomePage/HomePageStore';
import Pagination from './components/Pagination/Pagination';
import ProductCard from './components/Products/ProductCard';

function App() {
  return (
    <div className="App"> 
    <BrowserRouter>
      <Routes>
      <Route index element={<HomePage />}  />
      <Route path="/home-page-factory" element={<HomePageFactory />} />
      <Route path="/home-page-store" element={<HomePageStore/>} />
      <Route path="/login-page" element={<NavbarLogin />} />
      <Route path="/store-partner" element={<StorePartner />} />
      <Route path="/store-wallet" element={<StoreWallet />} />
      <Route path="/factory-partner" element={<FactoryPartner/>} />
      <Route path="/factory-wallet" element={<FactoryWallet />} />
      <Route path="/store-product" element={<StoreProduct />} />
      <Route path="/store-product-unavailable" element={<StoreProductUnavailable />} />
      <Route path="/factory-product" element={<FactoryProduct/>} />
      <Route path="/factory-product-unavailable" element={<FactoryProductUnavailable/>} />
      <Route path="/store-detailes" element={<StoreDetailes/>} />
      <Route path="/store-sort-detailes" element={<StoreSortDetalies/>} />
      <Route path="/factory-detailes" element={<FactoryDetailes/>} />
      <Route path="/factory-sort-detailes" element={<FactorySortDetailes/>} />
      <Route path="/favorites-products" element={<FavoritesProducts/>} />
      <Route path="/favorites-sort-products" element={<FavoritesSortProducts/>} />
      <Route path="/favorites-stores" element={<FavoriteStores/>} />
      <Route path="/favorites-factory" element={<FavoritesFactory/>} />
      <Route path="/notifications" element={<NofiticationPage />} />
      <Route path="/conditions-and-roles" element={<ConditionsAndRoles/>} />
      <Route path="/contact-us" element={<ContactUs/>} />
      <Route path="/personal-information" element={<PersonaLinformation />} />
      <Route path="/password-page" element={<PasswordPage/>} />
      <Route path="/cart-checkout" element={<CartCheckOut/>} />
      <Route path="/cart-electronic-wallet" element={<CartElectronicWallet/>} />
      <Route path="/cart-credit-card" element={<CartCreditCard/>} />
      <Route path="/address" element={<AddressPage/>} />
      <Route path="/current-order-store" element={<CurrentOrderStore/>} />
      <Route path="/current-order-details-store" element={<CurrentOrderDetailsStore/>} />
      <Route path="/curr-order-details-store-2" element={<CurrOrderDetailsStore2/>} />
      <Route path="/current-order-factory" element={<CureentOrderFactory/>} />
      <Route path="/current-order-details-factory" element={<CurrentOrderDetailsFactory/>} />
      <Route path="/curr-order-details-factory-2" element={<CurrOrderDetailsFactory2/>} />
      <Route path="/curr-order-details-factory-2" element={<CurrOrderDetailsFactory2/>} />
      <Route path="/finished-order-store" element={<FinishedOrderStore/>} />
      <Route path="/finished-order-details-store" element={<FinishedOrderDetailsStore/>} />
      <Route path="/finished-order-factory" element={<FinishedOrderFactory/>} />
      <Route path="/finished-order-details-factory" element={<FinishedOrderDetailsFactory/>} />
      <Route path="/finished-order-details-factory-different" element={<FinshedOrderDetalisFactory2/>} />
      <Route path="/sales" element={<SalesPage/>} />
      <Route path="/sales-sort-page" element={<SaleSortPage/>} />
      <Route path="/new-request-technical-support" element={<NewRequsetSupport/>} />
      <Route path="/new-request-chat-page" element={<NewReqChatPage/>} />
      <Route path="/previous-request-technical-support" element={<PreviousReqSupport/>} />
      <Route path="/previous-request-chat-page" element={<PreviousReqChatPage/>} />
      <Route path="/previous-request-chat-page-2" element={<PreviousReqChatPage2/>} />
      <Route path="/Best-seller" element={<BestSeller/>} />
      <Route path="/Best-seller-sort" element={<BestSortSeller/>} />
      <Route path="/Newest-products" element={<NewestProducts/>} />
      <Route path="/Newest-products-sort" element={<NewestProductsSort/>} />
      <Route path="/products-page-details" element={<ProductPageDetails/>} />
      <Route path="/products-page-details-sort" element={<ProductPageDetailsSort/>} />
      <Route path="/products-page-details-2" element={<ProductPageDetails2/>} />
      <Route path="/products-page-details-sort-2" element={<ProductsPageDetailsSort2/>} />
      <Route path="/pagination" element={<Pagination/>} />
      {/* <Route path="/product-card" element={<ProductCard/>} /> */}
      </Routes>
    </BrowserRouter>
  <Footer /> 
  

     
    </div>
  );
}

export default App;
