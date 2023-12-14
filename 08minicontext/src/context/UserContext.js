import React from "react";

const UserContext = React.createContext();

export default UserContext;

//Short notes:-
//Step1:- we have created one variable and we are throwing output to get Context.

//Step2(UserContextProvider.jsx) :-After wrapping it to UserContext, it became provider.
//We have to make provider of UserContext

//step:-3(App.jsx), we can give store access in app.jsx or main.jsx.
//All component can take access of UserContext state directly which means
//whatever components are present inside provider will get access of this UserContext

{
  /* <UserContext>
  <Login />
  <Card>
    <Data />
  </Card>
</UserContext>; */
}
