import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import "./App.css";

const products = [
  { id: 1, name: "Laptop", price: 1500 },
  { id: 2, name: "Phone", price: 900 },
  { id: 3, name: "Headphones", price: 150 },
];

function Home() {
  return (
    <div>
      <h1>მთავარი გვერდი</h1>
      <p>მოგესალმებით ჩვენს ვებგვერდზე!</p>
    </div>
  );
}

function Products() {
  return (
    <div>
      <h1>პროდუქტები</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>ფასი: {product.price} ლარი</p>
          <Link to={`/product/${product.id}`}>დეტალების ნახვა</Link>
        </div>
      ))}
    </div>
  );
}

function ProductDetails() {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <h2>პროდუქტი ვერ მოიძებნა</h2>;
  }

  return (
    <div>
      <h1>პროდუქტის დეტალები</h1>
      <h2>{product.name}</h2>
      <p>პროდუქტის ID: {product.id}</p>
      <p>ფასი: {product.price} ლარი</p>
      <Link to="/products">უკან პროდუქტებზე</Link>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h1>კონტაქტი</h1>
      <p>ელფოსტა: example@gmail.com</p>
      <p>ტელეფონი: 555 123 456</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">მთავარი</Link>
        <Link to="/products">პროდუქტები</Link>
        <Link to="/contact">კონტაქტი</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
