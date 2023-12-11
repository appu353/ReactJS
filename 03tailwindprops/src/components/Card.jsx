import React from "react";

function Card({ username, btnText = "Visit me" }) {
  //function Card(props)
  // console.log('Props', props); //It will give us empty object if we are not passing anything while calling this component in App.jsx.Otherwise Display whatever we are passing while calling component
  // console.log(props.username); //Aparna,appu:-but it is difficult to write like this always so we can directly pass our properties and access it
  console.log(username); //{username: 'Aparna'}{username: 'appu'}//We can access it inside card
  return (
    <>
      <div className="relative h-[400px] w-[300px] rounded-md">
        <img
          src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
          alt="AirMax Pro"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">{username}</h1>
          <p className="mt-2 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            debitis?
          </p>
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black">
            {btnText}
          </button>
          {/* We can also pass default value like {btnText || "visit me"}, but avoiding it for readabiltiy purpose */}
        </div>
      </div>
    </>
  );
}
export default Card;
