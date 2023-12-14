import React from "react";
import { useParams } from "react-router-dom";

function User() {
  //extracting dynamic value
  const { userid } = useParams(); //Whatever is coming in url, we can access it on page whether it is string or number

  return (
    <>
      <div className="text-center bg-gray-600 text-white text-3xl p-4">
        User: {userid}
      </div>
    </>
  );
}
export default User;
