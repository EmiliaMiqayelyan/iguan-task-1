import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header/Header";
import Middle from "./components/middle/Middle";
import Websites from "./components/website/Websites";
import Footer from "./components/footer/Footer";
import Table from './components/table/Table';
import Modal from './components/modal/Modal';

function App() {
  return (
    <div className="App">
      <Header />
      <Modal />
      <Middle />
      <Websites />
      <Table />
      <Footer />
    </div>
  );
}

export default App;
