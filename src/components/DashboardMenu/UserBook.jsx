import React from "react";
import BtnModifierUser from "./BtnModifierUser";
import BtnAjouterUser from "./BtnAjouterUser";
import BtnSupprimerUser from "./BtnSupprimerUser";

import "../../style/css/userbook.css";

function UserBook({ user }) {
  const handleClick = () => {
    console.log("click");
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
        {(user.firstName || user.name) && (
          <BtnModifierUser onClick={handleClick} />
        )}
      </div>

      <div className="userbook__box">
        <div className="userbook__box__txt">
          <strong className="userbook__box__txt__str">Email:</strong>{" "}
          <p className="userbook__box__txt__p"> {user.email}</p>{" "}
        </div>
        {user.email && <BtnModifierUser onClick={handleClick} />}
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
      <div className="userbook__box">
        {" "}
        <div className="userbook__box__txt">
          <strong className="userbook__box__txt__str">Adresse:</strong>
          <p className="userbook__box__txt__p"> {user.address}</p>
        </div>
        {!user.address && <BtnAjouterUser onClick={handleClick} />}
        {user.address && <BtnModifierUser onClick={handleClick} />}
      </div>

      <div className="userbook__box">
        <div className="userbook__box__txt">
          <strong className="userbook__box__txt__str">Vin préféré:</strong>{" "}
          <p className="userbook__box__txt__p">{user.favoriteWine}</p>{" "}
        </div>
        {!user.favoritewine && <BtnAjouterUser onClick={handleClick} />}
        {user.favoritewine && (
          <div className="btnbox">
            <BtnModifierUser onClick={handleClick} />
            <BtnSupprimerUser onClick={handleClick} />
          </div>
        )}
      </div>

      <div className="userbook__box">
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
      </div>

      <div className="userbook__box">
        <div className="userbook__box__txt">
          <strong className="userbook__box__txt__str">Âge:</strong>{" "}
          <p className="userbook__box__txt__p">{user.age}</p>{" "}
        </div>
        {!user.age && <BtnAjouterUser onClick={handleClick} />}
        {user.age && (
          <div className="btnbox">
            <BtnModifierUser onClick={handleClick} />
            <BtnSupprimerUser onClick={handleClick} />
          </div>
        )}
      </div>
      <div className="userbook__box">
        <div className="userbook__box__txt">
          <strong className="userbook__box__txt__str">Profession:</strong>
          <p className="userbook__box__txt__p"> {user.profession} </p>{" "}
        </div>
        {!user.profession && <BtnAjouterUser onClick={handleClick} />}
        {user.profession && (
          <div className="btnbox">
            <BtnModifierUser onClick={handleClick} />
            <BtnSupprimerUser onClick={handleClick} />
          </div>
        )}
      </div>
    </div>
  );
}

export default UserBook;
