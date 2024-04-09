import React from "react";

import "../../style/css/vosmots.css";

function VosMots() {
  return (
    <div className="vosmots">
      <h3 className="vosmots__title">Vos mots...</h3>

      <div className="vosmots__box">
        <div className="vosmots__box__1">
          <blockquote className="vosmots__box__1__bq">
            <p className="vosmots__box__1__bq__p">
              " Châteauneuf-du-Pape 2016. Un vin de caractère , puissant et
              épicé avec une dominance de la framboise et de la cerise noire .
              Une note florale et un bon équilibre caractérisent ce vin . Belle
              longueur en bouche. J‘ai beaucoup apprécié …"
            </p>
          </blockquote>
        </div>

        <div className="vosmots__box__2">
          <blockquote className="vosmots__box__2__bq">
            <p className="vosmots__box__2__bq__p">
              "[..] Jeune domaine que j'ai vraiment découvert cet été à
              l'occasion de la fête de la Véraison à Châteauneuf-du-Pape et dont
              les vins m'ont enthousiasmé. Ce vin m'a littéralement subjugué. Un
              fruit magnifique, une sève soyeuse, des tannins d'une grande
              souplesse qui offrent une belle mâche, très élégante et d'une
              grande finesse."
            </p>
          </blockquote>
        </div>

        <div className="vosmots__box__3">
          <blockquote className="vosmots__box__3__bq">
            <p className="vosmots__box__3__bq__p">
              "Contre pied des Châteauneuf du Pape d'un autre temps... Tout en
              finesse volupté...Belle bouteille, beau millesime en Chateauneuf..
              Domaine à suivre de près"
            </p>
          </blockquote>
        </div>

        <div className="vosmots__box__4">
          {" "}
          <blockquote className="vosmots__box__4__bq">
            <p className="vosmots__box__4__bq__p">
              "Excellents vins, en particulier les 2016 et 2018 en Châteauneuf.
              Allez voir M. Cuscusa, la dégustation et la conversation valent le
              détour."
            </p>
          </blockquote>
        </div>

        <div className="vosmots__box__5">
          <blockquote className="vosmots__box__5__bq">
            <p className="vosmots__box__5__bq__p">
              "Châteauneuf-du-Pape 2019. Il est fruité avec une très belle
              attaque . Il est rond avec une dominance de fruits noirs, cerise,
              prune et mûre, belle touche poivrée . Les tannins sont biens
              fondus. Il est élégant et peut se conserver encore 7 à 10 ans en
              cave. Une très belle harmonie pour ce vin de la vallée du Rhône"
            </p>
          </blockquote>
        </div>

        <div className="vosmots__box__6">
          <blockquote className="vosmots__box__6__bq">
            <p className="vosmots__box__6__bq__p">
              " Quel puissance ! Un peu jeune ce 2018 Très très prometteur.
              Fruits confits en bouche"
            </p>
          </blockquote>
        </div>
      </div>

      <div className="vosmots__a">
        <a
          href="https://www.vivino.com/wineries/domaine-la-consonniere"
          target="_blank"
          rel="noopener noreferrer"
          title="Texte de l'infobulle"
          className="vosmots__a__type"
        >
          Vivino
        </a>

        <a
          href="https://www.google.com/search?client=ubuntu-chr&hs=RtZ&sca_esv=32b61136c3e74a0a&sxsrf=ACQVn09NZYBjzckbrumBM3slxXE_XcruwA:1712666425844&uds=AMwkrPtyB8MsmozA4Lwzqy2G2HCuzJzAJA27ywKbzjy88RHKNcF80aBjqsmOcVCur-Zdsca66RtgSKp8fbyT5zCptmiB_3tIK-KIOQbmHLLC-Mh4Hx_KeEL3KP3zct4VBKs8ckUCORn15Hmabbh-KsWqLhK7dxrsHA&si=AKbGX_oXOTjHK3vNPxrwAU4tsC2W_rsdJDrrSHpqUAOdbOh1q0wmr4s7INNxb2Hhca0_3S6Rryffv3a3qUp7UsQ535x1ygjKOsnZC6Ob-rjY2F0aG-SRp6s%3D&q=Domaine+La+Consonni%C3%A8re+Avis&sa=X&ved=2ahUKEwjgn7nPk7WFAxUARaQEHa1jC4MQ3PALegQIVhAF&biw=1848&bih=1049&dpr=1"
          target="_blank"
          rel="noopener noreferrer"
          title="Texte de l'infobulle"
          className="vosmots__a__type"
        >
          Google
        </a>

        <a
          href="https://www.lapassionduvin.com/rhone/47055-domaine-la-consonniere-chateauneuf-du-pape"
          target="_blank"
          rel="noopener noreferrer"
          title="Texte de l'infobulle"
          className="vosmots__a__type"
        >
          La Passion du vin
        </a>

        <a
          href="https://www.tripadvisor.fr/Attraction_Review-g187215-d12899190-Reviews-Domaine_de_la_Consonniere-Chateauneuf_du_Pape_Vaucluse_Provence_Alpes_Cote_d_Azu.html"
          target="_blank"
          rel="noopener noreferrer"
          title="Texte de l'infobulle"
          className="vosmots__a__type"
        >
          Tripadvisor
        </a>
      </div>
    </div>
  );
}
export default VosMots;
