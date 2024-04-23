import { useState } from 'react';
import './EinAuszahlung.css';

const EinAuszahlung = () => {
  // zwei veränderliche Werte: Betrag (input) und Saldo (output)
  const [betrag, setBetrag] = useState('');
  const [saldo, setSaldo] = useState(Number(betrag));
  const [inputValue, setInputValue] = useState('');

  // Betrag und Saldo müssen zu Number konvertiert werden, weil sonst bei der
  // Berechnung eine string concatenation stattfinden würde

  // Betrag wird aus dem Inputfeld gelesen
  const getBetrag = (event) => {
    setBetrag(Number(event.target.value));
    setInputValue(Number(event.target.value));
  };

  //   Speichern des aktuellen Saldos um bei window.alert() das löschen des Wertes zu verhindern
  const [savedSaldo, setSavedSaldo] = useState(saldo);

  // value von saldo wird als savedSaldo gespeichert, siehe f checkSaldo()
  const getSavedSaldo = () => {
    setSavedSaldo(saldo);
    console.log('setSavedSaldo -> saldo:', saldo);
  };

  const alert = () => {
    window.alert('Du kannst nicht mehr abbuchen');
  };

  //   logs zeigen in der Konsole genau an was beim Auszahlen passiert
  const checkSaldo = () => {
    console.log("'Auzahlen' button wurde geklickt");
    if (saldo - betrag >= 0) {
      console.log('-> neuer Saldo > 0, Auszahlung erfolgt');
      console.log('-> savedSaldo bleibt unverändert');
      setSaldo(saldo - betrag);
    } else {
      console.log('-> neuer Saldo < 0, Auszahlung nicht möglich');
      console.log('-> alert() wird ausgelöst');
      alert();

      console.log('-> getSavedSaldo() wird ausgelöst');
      getSavedSaldo();
    }
    setInputValue('');
    setBetrag('');
  };

  const addSaldo = () => {
    setSaldo(saldo + betrag);
    setInputValue('');
    setBetrag('');
  };

  // console.log({ betrag });
  // console.log({ saldo });
  // console.log({ savedSaldo });
  // console.log({ inputValue });

  return (
    <section>
      <div className='konto'>
        <h2>Mein Girokonto</h2>
        <div className='saldo'>{saldo + betrag >= 0 ? saldo : savedSaldo}</div>
        {/* Saldo wird aktualisiert */}
        <input
          type='number'
          id='input'
          className='geldbetrag'
          placeholder='Betrag in €'
          value={betrag > 0 ? inputValue : ''} // sonst würde hier immer eine 0 stehen
          onChange={getBetrag}
        />
        <div>
          <button
            className='einzahlen'
            onClick={addSaldo} // einfache Neuberechnung des Saldos
          >
            Einzahlen
          </button>
          <button
            className='auszahlen'
            onClick={checkSaldo} // Funktion wird ausgelöst
          >
            Auszahlen
          </button>
        </div>
      </div>
    </section>
  );
};

export default EinAuszahlung;
