import React from "react";

function Container({ children }) {
  return <div className="w-full max-w-7xl mx-auto px-4">{children}</div>;
}

export default Container;
//If return has only one statement, no need to use bracket after return, make sure that we are using  semicolon at the end of statement.
