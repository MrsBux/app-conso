// import React, { useState, useContext } from "react";
// import Form from "react-bootstrap/Form";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import "../../style/css/searchbox.css";
// import loupe from "../../assets/logo_loupe.webp";
// import { useSearch } from "../../context/SearchContext";
// import Results from "./Results"; // Importez le composant Results

// function SearchBox() {
//   const { setSearchTerm, searchResults } = useSearch(); // Accédez à setSearchTerm et searchResults depuis le contexte de recherche

//   const handleInputChange = (e) => {
//     setSearchTerm(e.target.value); // Mettez à jour le terme de recherche dans le contexte de recherche
//   };

//   return (
//     <div>
//       <Form className="searchbox">
//         <Row className="searchbox__row">
//           <Col className="searchbox__row__col" xs="auto">
//             <Form.Control
//               type="text"
//               placeholder="Search"
//               className=" mr-sm-2 searchbox__row__col__box"
//               id="bar"
//               onChange={handleInputChange}
//             />
//           </Col>
//           <Col className="searchbox__row__col" xs="auto" id="loup">
//             <button
//               type="submit"
//               className="searchbox__row__col__btn"
//               id="loupe"
//             >
//               <img
//                 src={loupe}
//                 alt="loupe de recherche"
//                 className="searchbox__row__col__btn__img"
//               ></img>
//             </button>
//           </Col>
//         </Row>
//       </Form>
//       <Results results={searchResults} />{" "}
//       {/* Affichez les résultats de la recherche */}
//     </div>
//   );
// }

// export default SearchBox;
