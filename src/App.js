import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Middle from "./components/Middle";
import Websites from "./components/Websites";
import Footer from "./components/Footer";
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <Header />
      <Middle />
      <Websites />
      <Table />
      <Footer />
    </div>
  );
}

export default App;
