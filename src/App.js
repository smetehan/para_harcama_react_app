import "./App.css";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import products from "./products.json";
import Product from "./components/Product";
import Basket from "./components/Basket";
import { Container } from "react-bootstrap";
function App() {
  const [money, setMoney] = useState(500);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);
  const [visible, setVisible] = useState(8);
  const resetBasket = () => {
    setBasket([]);
    setMoney(500);
  };
  const paginationNext = () => {
    setVisible(visible + 8);
  };
  const paginationPrev = () => {
    setVisible(visible - 8);
  };

  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return (
          acc +
          item.amount * products.find((product) => product.id === item.id).price
        );
      }, 0)
    );
  }, [basket]);
  return (
    <Container>
      <div className="App">
        <Header total={total} money={money} />
        <div className="container products">
          {products.slice(visible - 8, visible).map((product) => (
            <Product
              key={product.id}
              total={total}
              money={money}
              basket={basket}
              setBasket={setBasket}
              product={product}
            />
          ))}
        </div>

        {total > 0 && (
          <Basket
            products={products}
            resetBasket={resetBasket}
            basket={basket}
            total={total}
          />
        )}

        <div className="pagination">
          <button
            disabled={visible <= 8}
            className="paginationPrev"
            onClick={paginationPrev}
          >
            Önceki Sayfa
          </button>
          <button
            disabled={visible >= 16}
            className="paginationNext"
            onClick={paginationNext}
          >
            Sonraki Sayfa
          </button>
        </div>

        <style jsx>{`
          .pagination {
            margin-bottom: 15px;
            margin-top: 10px;
          }
          .pagination .paginationPrev {
            border: 1px solid black;
            padding: 10px;
            margin-right: 10px;
            cursor: pointer;
          }
          .pagination .paginationNext {
            border: 1px solid black;
            padding: 10px;
            cursor: pointer;
          }
        `}</style>
      </div>
    </Container>
  );
}

export default App;
