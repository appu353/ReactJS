import React from "react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData(); //for loading data and displaying it
  //   const [data, setData] = useState([]); //For updating data in UI
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/hiteshchoudhary")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  return (
    <>
      <div className=" text-center bg-gray-600 text-white text-3xl p-4">
        GithubFollwer: {data.followers}
      </div>
    </>
  );
}
export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");
  return response.json();
};

//For simply displaying data of Github follower we have to call github API, using that we can display it.
