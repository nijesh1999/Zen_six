import React from "react";
import Container from "reactstrap";
import useState from "react";

let username = "";

// async function getUser() {
//   let name=document.querySelector("#username").value;
//   let users;
//   try {
//     users= fetch(
//       `https://api.github.com/users/${name}`)
//       .then(response => response.json())
//       .then(users =>console.log( users))
//     } catch (e) {
//       console.log(e);
//     }
//      console.log( users);
// }

// async function displayUser() {
//   let users = await getUser();

//   const userList = document.querySelector(".user-list");
//   userList.innerHTML = "";
//   users.data.forEach((user) => {

// userList.innerHTML += `

//  <div class="maincontent">
//   <div class="card" >
//      <img  class="user-avatar" src="${user.images.jpg.image_url}" alt="${user.images.jpg.name}">
//        <div class="card-body">
//          <h3 class="card-title"><p>Title :<span> ${user.title}</span></p></h3>

//             <p class="card-text"><b><h4>Synopsis </h4></b>${user.synopsis}</p>
//             <p>Date : <span>${user.aired.prop.from.day}-${user.aired.prop.from.month}-${user.aired.prop.from.year}</span></p>
//             <p>Type of Series : <span>${user.type}</span</p>
//             <p>IMDB Score : <span>${user.score}</span></p>
//             <p>Rating : <span>${user.rating}</span></p>

//      </div>
//  </div>
// </div>x

// `;
//   });

// }

// displayUser();

// useEffect(() => {
//   getEmployees();
// }, []);

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
