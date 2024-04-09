import FiltrePartenaire from "../components/FiltresPartenaires";
import NosPartenaires from "../components/NosPartenaires";
import FormPartners from "../components/FormPartners";

import "../style/css/partners.css";

function Partners() {
  return (
    <>
      {" "}
      <main>
        <div className="partenaires">
          <section className="partenaires__box">
            <div></div>
            <NosPartenaires />
            <FiltrePartenaire
              filtreName="name"
              onClick={""}
              isSelected={false}
            />
          </section>

          <section className="partenaires__form">
            <FormPartners />
          </section>
        </div>
      </main>
    </>
  );
}
export default Partners;
