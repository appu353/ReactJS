import React, { useId } from "react";

function InputBox({
  label, //this is for from and to column
  amount, //for giving amount
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [], //empty array so that app should not crash
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisabled = false,

  className = "", //This we have given so that user can use their custom CSS.
}) {
  const amountUniqueId = useId(); //for generating unique ID, and binding label and input tag together
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={amountUniqueId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountUniqueId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisabled}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;

//Notes:-
//While looping always remember to pass an attribute called as "key" to increase the performance of iterations in React

//useId is a React Hook for generating unique IDs that can be passed to accessibility attributes.

//const id = useId()
//Do not call useId to generate keys in a list. Keys should be generated from your data.
