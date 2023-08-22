import { styled } from "styled-components";
import { useEffect, useState } from "react";
import InputsCurrency from "./InputCurrency";
import { formatedPrice } from "./helper";

function App() {
  const url =
    "https://v6.exchangerate-api.com/v6/a2ea8d1730e23c5b39b92926/latest";
  const [loading, setLoading] = useState(false);
  const [fromQuery, setFromQuery] = useState("USD");
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [toQuery, setToQuery] = useState("NGN");

  const fetchData = async () => {
    setLoading(true);
    try {
      const resp = await fetch(`${url}/${fromQuery}`);
      const data = await resp.json();
      if (typeof amount === String) return;
      const xChange = data.conversion_rates[toQuery];
      const $total = amount * xChange;
      setTotal($total);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // useEffect(() => {
  // fetchData();
  // }, []);

  return (
    <>
      <Wrapper className="">
        <div className="background"></div>
        <main className="container">
          <div style={{ textAlign: "center", color: "#fff" }}>
            <h1 className="header">Specter Currency Converter</h1>
            <h4 className="subhead">
              Check live foreign currency exchange rates
            </h4>
          </div>

          <div className="box">
            <button className="buttonHead">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Convert
            </button>
            <InputsCurrency
              fromQuery={fromQuery}
              setFromQuery={setFromQuery}
              toQuery={toQuery}
              setToQuery={setToQuery}
              amount={amount}
              setAmount={setAmount}
            />

            <div className="footer">
              {loading ? (
                <div className="loader"></div>
              ) : (
                <h2 className="total">{formatedPrice(total, toQuery)}</h2>
              )}

              <div className="btn-container">
                <button onClick={() => fetchData()} className="btn-convert">
                  Convert
                </button>
              </div>
            </div>
          </div>
        </main>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
  background: white;

  .total {
    color: #676565;
  }
  .container {
    padding: 4rem 2rem;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    justify-content: space-between;
    align-content: space-around;
  }

  .background {
    background: #03034c;
    height: 23rem;
    width: 100%;
    left: 0;
    top: 0;
    position: absolute;
  }

  .icon {
    stroke: #1e70c1;
    width: 1.5rem;
    height: 1.5rem;
  }

  .header {
    font-weight: 600;
    font-size: 1.9rem;
    text-transform: capitalize;
  }

  .subhead {
    margin-top: 0.6rem;
  }

  .buttonHead {
    cursor: pointer;
    display: flex;
    color: #1e70c1;
    background: transparent;
    border: none;
    align-items: center;
    outline: none;
    font-size: 1rem;
    gap: 0.7rem;
    padding: 0.7rem 2rem;
    width: 100%;
    justify-content: center;
    border-top-right-radius: 7px;
    border-top-left-radius: 7px;
    transition: all 0.3s;

    &:hover {
      background: rgb(240, 245, 250);
    }
  }

  .box {
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0px 5px 7px #00000049;
  }

  .btn-container {
  }

  .btn-convert {
    display: inline-block;
    color: #fff;
    font-weight: 500;
    background: #1e70c1;
    border: none;
    border-radius: 5px;
    font-size: 1.3rem;
    cursor: pointer;
    padding: 0.6rem 1rem;
  }

  .footer {
    padding: 1.5rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
  }
`;

export default App;
