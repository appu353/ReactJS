import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({}); //using empty {} so that if api response is null,in that case also code won't crash
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
  }, [currency]); //here currency is dependencies bcz response will chnage based on currency
  console.log(data);
  return data;
}
export default useCurrencyInfo;
//Custom hooks in react:-this is just function returning data of currency change and by default we will
//receive data in string type so we are converting it to json.
//While creating file, we should always prefer extension as JS orTS instead of JSX, if it is not returning any JSX data
