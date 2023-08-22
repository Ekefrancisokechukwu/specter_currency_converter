/* eslint-disable react/prop-types */
import { styled } from "styled-components";
import { currencies } from "./data";

const InputsCurrency = ({
  fromQuery,
  setFromQuery,
  setToQuery,
  toQuery,
  setAmount,
  amount,
}) => {
  return (
    <Wrapper>
      <div className="input-group">
        <label htmlFor="amount" className="input-label">
          Amount
        </label>
        <input
          type="number"
          className="input"
          placeholder="$100"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          id="amount"
        />
      </div>
      <div className="input-group ">
        <label htmlFor="from" className="input-label">
          From
        </label>
        {/* <div className="flag-box">
          <img src={`https://flagsapi.com/US/flat/64.png`} alt="" />
        </div> */}
        <select
          name="from"
          value={fromQuery}
          id="from"
          onChange={(e) => setFromQuery(e.target.value)}
          className="input select-input"
        >
          {currencies.map((currency, i) => (
            <option value={currency.currency_code} key={i}>
              {currency.country_Name}
            </option>
          ))}
        </select>
      </div>{" "}
      <button className="swap-btn">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 swap-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
            />
          </svg>
        </span>
      </button>
      <div className="input-group">
        <label htmlFor="to" className="input-label">
          To
        </label>
        {/* <div className="flag-box">
          <img src="https://flagsapi.com/NG/flat/64.png" alt="" />
        </div> */}
        <select
          name="to"
          value={toQuery}
          onChange={(e) => setToQuery(e.target.value)}
          className="input select-input"
          id="to"
        >
          {currencies.map((currency, i) => (
            <option value={currency.currency_code} key={i}>
              {currency.country_Name}
            </option>
          ))}
        </select>
      </div>{" "}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem 1rem;
  margin-top: 3rem;

  @media (min-width: 400px) {
    padding: 1rem 3rem;
  }

  .flag-box {
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 2.2rem;
    left: 1rem;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .select-input {
    padding-left: 5rem !important;
  }

  .input {
    width: 100%;
    padding: 0.6rem 1rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 1.3rem;
    transition: all 0.3s;
    color: #676565;

    &:focus {
      outline: 1px solid #1e70c1;
    }

    @media (min-width: 500px) {
      width: 20rem;
    }
  }

  .swap-icon {
    width: 1.5rem;
    height: 1.5rem;
    stroke: #1e70c1;
  }

  .swap-btn {
    width: 3rem;
    height: 3rem;
    display: grid;
    place-items: center;
    cursor: pointer;
    background: transparent;
    border-radius: 50%;
    outline: none;
    border: 1px solid #ccc;
    align-self: last baseline;
  }

  .input-group {
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 0.6rem;
  }

  .input-label {
    font-weight: 600;
  }
`;

export default InputsCurrency;
