import 'bootstrap/dist/css/bootstrap.min.css';
import Middle from "./middle/Middle";
import Websites from "./website/Websites";
import Table from './table/Table';

function Main() {
  return (
    <div className="home">
      <Middle />
      <Websites />
      <Table />
    </div>
  );
}

export default Main;
