import React from 'react'

const Home = () => {
  const trimmedNames = "name 1, name 2, name 3".split(",").map(name => name.trim());

  return (
    <div>
      <h1>{trimmedNames.join(",")}</h1>
    </div> 
  ) 
}

const Slice=()=> {
  const description = "hello all";
  const ss = description.slice(0, 4);
  

  return <div>

        <h1>{ss}</h1>

        </div>;
}

export {Home,Slice} ;