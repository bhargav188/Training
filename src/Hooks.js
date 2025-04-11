import React, { useState } from "react";
import FullName from "./FullName";

const Hooks=()=> {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");

    return (
    <div> <h2>Enter Name</h2>

    <input type="text" placeholder="First Name" value={firstname} onChange={(a) => setFirstname(a.target.value)}/>

    <input type="text" placeholder="Last Name" value={lastname} onChange={(a) => setLastname(a.target.value)}/>

      <FullName firstname={firstname} lastname={lastname} />
    </div>
  );
}

export default Hooks;
