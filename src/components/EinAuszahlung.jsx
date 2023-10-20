import { useState } from "react";
import "./EinAuszahlung.css";

const EinAuszahlung = () => {
  // zwei veränderliche Werte: Betrag (input) und Saldo (output)
  const [betrag, setBetrag] = useState("");
  const [saldo, setSaldo] = useState(Number(betrag));

  // Betrag und Saldo müssen zu Number konvertiert werden, weil sonst bei der
  // Berechnung eine string concatenation stattfinden würde

  // Betrag wird aus dem Inputfeld gelesen
  const getBetrag = (event) => {
    setBetrag(Number(event.target.value));
  };

  console.log({ betrag });
  console.log({ saldo });
  return (
    <section>
      <div className="konto">
        <h2>Mein Girokonto</h2>
        <div className="saldo">{saldo}</div> {/* Saldo wird aktualisiert */}
        <input
          type="number"
          id="input"
          className="geldbetrag"
          placeholder="Betrag in €"
          value={betrag > 0 ? betrag : ""} // sonst würde hier immer eine 0 stehen
          onChange={getBetrag}
        />
        <div>
          {/* Beim click auf Buttons wird Saldo neu berechnet*/}
          <button
            className="einzahlen"
            onClick={() => setSaldo(saldo + betrag)}
          >
            Einzahlen
          </button>
          <button
            className="auszahlen"
            onClick={() => setSaldo(saldo - betrag)}
          >
            Auszahlen
          </button>
        </div>
      </div>
    </section>
  );
};

export default EinAuszahlung;
