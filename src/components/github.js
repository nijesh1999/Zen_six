import React from "react";
import Container from "reactstrap";
import useState from "react";

let username = "";


const Github = () => {
  const [data, setData] = useState([]);
  const getUser = () => {
    fetch("https://api.github.com/")
      .then((response) => response.json())
      .then((data) => setData(data));
  };
  return (
    <div>
      {/* <Container> */}
      <form>
        <input
          type="search"
          name="username"
          id="username"
          placeholder="S E A R C H"
        />
        <button onClick={getUser}>Search</button>
      </form>
      {/* </Container> */}
    </div>
  );
};

export default Github;
