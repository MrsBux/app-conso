import React, { useState } from "react";
import BtnModifierUser from "./BtnModifierUser";
import BtnAjouterUser from "./BtnAjouterUser";
import BtnSupprimerUser from "./BtnSupprimerUser";
import ModalT from "../ModalT";

import "../../style/css/userbook.css";

function UserBook({ user }) {
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");
  const [age, setAge] = useState("");
  const [profession, setProfession] = useState("");

  const handleClick = () => {
    console.log("click");
  };

  const userId = localStorage.getItem("userId");

  const modifyEmail = () => {
    const token = localStorage.getItem("token");

    try {
      const response = fetch(
        `https://domconso-d13067f1e717.herokuapp.com/api/user/update/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            email: email,
          }),
        }
      );

      alert("Email modifié");
    } catch {
      console.log("error");
    }
  };

  const modifyProfession = () => {
    const token = localStorage.getItem("token");

    try {
      const response = fetch(
        `https://domconso-d13067f1e717.herokuapp.com/api/user/update/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            profession: profession,
          }),
        }
      );
      alert("Profession modifié");
    } catch {
      console.log("error");
    }
  };

  return (
    <div className="userbook">
      <div className="userbook__box">
        {" "}
        <div className="userbook__box__txt">
          <strong className="userbook__box__txt__str">Nom complet:</strong>{" "}
          <p className="userbook__box__txt__p">
            {user.firstName} {user.name}
          </p>{" "}
        </div>
        {/* {(user.firstName || user.name) && (
          <BtnModifierUser onClick={handleClick} />
        )} */}
      </div>

      <div className="userbook__box">
        <div className="userbook__box__txt">
          <strong className="userbook__box__txt__str">Email:</strong>{" "}
          <p className="userbook__box__txt__p"> {user.email}</p>{" "}
        </div>
        {user.email && (
          <ModalT
            title={"Modifier Email"}
            btnShow={<BtnModifierUser onClick={handleClick} />}
            modalContent={
              <div>
                <form>
                  <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input type="submit" onClick={modifyEmail} value="Modifier" />
                </form>
              </div>
            }
            btnname={"Fermer"}
          />
        )}
      </div>

      <div className="userbook__box">
        <div className="userbook__box__txt">
          <strong className="userbook__box__txt__str">Numéro de client:</strong>{" "}
          <p className="userbook__box__txt__p"> {user.numeroclient} </p>
        </div>
      </div>
      <div className="userbook__box">
        <div className="userbook__box__txt">
          {" "}
          <strong className="userbook__box__txt__str">Points:</strong>{" "}
          <p className="userbook__box__txt__p"> {user.points} </p>
        </div>
      </div>
      {/* <div className="userbook__box">
        {" "}
        <div className="userbook__box__txt">
          <strong className="userbook__box__txt__str">Adresse:</strong>
          <p className="userbook__box__txt__p"> {user.address}</p>
        </div>
        {
          <ModalT
            title={"Modifier Adress"}
            btnShow={<BtnModifierUser onClick={handleClick} />}
            modalContent={
              <div>
                <form>
                  <input
                    type="adress"
                    placeholder="Adresse"
                    onChange={(e) => setAdress(e.target.value)}
                  />
                  <input
                    type="submit"
                    onClick={modifyAdress}
                    value="Modifier"
                  />
                </form>
              </div>
            }
            btnname={"Fermer"}
          />
        }
      </div> */}

      <div className="userbook__box">
        <div className="userbook__box__txt">
          <strong className="userbook__box__txt__str">Vin préféré:</strong>{" "}
          <p className="userbook__box__txt__p">{user.favoriteWine}</p>{" "}
        </div>
      </div>

      {/* <div className="userbook__box">
        <div className="userbook__box__txt">
          <strong className="userbook__box__txt__str">Salon favori:</strong>{" "}
          <p className="userbook__box__txt__p">{user.favoriteSalon} </p>
        </div>
        {!user.favoritesalon && <BtnAjouterUser onClick={handleClick} />}
        {user.favoritesalon && (
          <div className="btnbox">
            <BtnModifierUser onClick={handleClick} />
            <BtnSupprimerUser onClick={handleClick} />
          </div>
        )}
      </div> */}

      {/* <div className="userbook__box">
        <div className="userbook__box__txt">
          <strong className="userbook__box__txt__str">Âge:</strong>{" "}
          <p className="userbook__box__txt__p">{user.age}</p>{" "}
        </div>

        {
          <div className="btnbox">
            <ModalT
              title={"Modifier Age"}
              btnShow={<BtnModifierUser onClick={handleClick} />}
              modalContent={
                <div>
                  <form>
                    <input
                      type="string"
                      placeholder="Âge"
                      onChange={(e) => setAge(e.target.value)}
                    />
                    <input type="submit" onClick={modifyAge} value="Modifier" />
                  </form>
                </div>
              }
              btnname={"Fermer"}
            />
          </div>
        }
      </div> */}

      <div className="userbook__box">
        <div className="userbook__box__txt">
          <strong className="userbook__box__txt__str">Profession:</strong>
          <p className="userbook__box__txt__p"> {user.profession} </p>{" "}
        </div>
        {
          <ModalT
            title={"Modifier Profession"}
            btnShow={<BtnModifierUser onClick={handleClick} />}
            modalContent={
              <div>
                <form>
                  <input
                    type="string"
                    placeholder="Profession"
                    onChange={(e) => setProfession(e.target.value)}
                  />
                  <input
                    type="submit"
                    onClick={modifyProfession}
                    value="Modifier"
                  />
                </form>
              </div>
            }
            btnname={"Fermer"}
          />
        }
      </div>
    </div>
  );
}

export default UserBook;
