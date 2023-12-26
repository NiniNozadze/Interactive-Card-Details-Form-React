import { Helmet } from "react-helmet";
import "./App.css";
import Cards from "./Components/Cards/Cards";
import Forms from "./Components/Forms/Forms";
import GlobalStyles from "./GlobalStyles";
import { useState } from "react";
import ConfirmCard from "./Components/ConfirmCard/ConfirmCard";

function App() {
  const [holderName, setHolderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [showConfirmCard, setShowConfirmCard] = useState(false);

  return (
    <>
      <GlobalStyles />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>

      <Cards
        holderName={holderName}
        setHolderName={setHolderName}
        cardNumber={cardNumber}
        setCardNumber={setCardNumber}
        month={month}
        setMonth={setMonth}
        year={year}
        setYear={setYear}
        cvc={cvc}
        setCvc={setCvc}
      />
      {!showConfirmCard && (
        <>
          <Forms
            holderName={holderName}
            setHolderName={setHolderName}
            cardNumber={cardNumber}
            setCardNumber={setCardNumber}
            month={month}
            setMonth={setMonth}
            year={year}
            setYear={setYear}
            cvc={cvc}
            setCvc={setCvc}
            showConfirmCard={showConfirmCard}
            setShowConfirmCard={setShowConfirmCard}
          />
        </>
      )}

      {showConfirmCard && <ConfirmCard />}
    </>
  );
}

export default App;
