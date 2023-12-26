import { useState, useRef } from "react";
import styled from "styled-components";

const Forms = (props) => {
  const yearInputRef = useRef(null);
  const cvcInputRef = useRef(null);
  const [nameError, setNameError] = useState("");
  const [numberError, setNumberError] = useState("");
  const [yearError, setYearError] = useState("");
  const [monthError, setMonthError] = useState("");
  const [cvcError, setCvcError] = useState("");

  const handleInputChange = (e) => {
    props.setHolderName(e.target.value);
  };
  const numberInputChange = (e) => {
    props.setCardNumber(e.target.value);
  };
  const monthInputChange = (e) => {
    props.setMonth(e.target.value);
  };
  const yearInputChange = (e) => {
    props.setYear(e.target.value);
  };
  const cvcInputChange = (e) => {
    props.setCvc(e.target.value);
  };
  const handleLettersKeyPress = (e) => {
    const validCharacters = /[A-Z, a-z]/;
    if (!validCharacters.test(e.key)) {
      e.preventDefault();
    }
  };
  const handleNumberKeyPress = (e) => {
    const validCharacters = /[0-9Ee]/;
    if (e.key === "Delete" || e.key === "Backspace") {
      return;
    }
    if (!validCharacters.test(e.key)) {
      e.preventDefault();
    }
    if (e.target.value.length === 4) {
      e.target.value += " ";
    } else if (e.target.value.length === 9) {
      e.target.value += " ";
    } else if (e.target.value.length === 14) {
      e.target.value += " ";
    } else if (e.target.value.length === 19) {
      e.preventDefault();
    }
  };

  const handleMonthInput = (e) => {
    const validCharacters = /[0-9]/;
    if (!validCharacters.test(e.key) && e.key !== "Backspace") {
      e.preventDefault();
    }
    if (
      e.target.value.length === 2 &&
      e.key !== "Backspace" &&
      yearInputRef.current
    ) {
      yearInputRef.current.focus();
    }
  };

  const handleYearInput = (e) => {
    const validCharacters = /[0-9]/;
    if (!validCharacters.test(e.key) && e.key !== "Backspace") {
      e.preventDefault();
    }

    if (
      e.target.value.length === 2 &&
      e.key !== "Backspace" &&
      cvcInputRef.current
    ) {
      cvcInputRef.current.focus();
    }
  };

  const handleCvcInput = (e) => {
    const validCharacters = /[0-9]/;
    if (!validCharacters.test(e.key) && e.key !== "Backspace") {
      e.preventDefault();
    }
  };
  const clickConfirm = () => {
    if (props.holderName.trim() === "") {
      setNameError("Name is required");
    } else {
      setNameError("");
    }

    if (props.cardNumber.length === 0) {
      setNumberError("Card Number is required");
    } else if (
      props.cardNumber.includes("E") ||
      props.cardNumber.includes("e")
    ) {
      setNumberError("Wrong format, numbers only");
    } else if (props.cardNumber.length < 19) {
      setNumberError("16 numbers required");
    } else {
      setNumberError("");
    }
    if (props.year.length === 0 || props.year.length === 1) {
      setYearError("Can't be blank");
    } else {
      setYearError("");
    }
    if (props.month.length === 0 || props.month.length === 1) {
      setMonthError("Can't be blank");
    } else {
      setMonthError("");
    }
    if (props.cvc.length === 1 || props.cvc.length === 2) {
      setCvcError("Three numbers required");
    } else if (props.cvc.length === 0) {
      setCvcError("Can't be blank");
    } else {
      setCvcError("");
    }
    if (
      props.holderName != "" &&
      props.cardNumber.length === 19 &&
      props.year.length === 2 &&
      props.month.length === 2 &&
      props.cvc.length === 3
    ) {
      props.setShowConfirmCard(true);
    } else {
      props.setShowConfirmCard(false);
    }
  };

  return (
    <>
      <DetailsDiv>
        <CardName>Cardholder Name</CardName>
        <NameInput
          onChange={handleInputChange}
          placeholder="e.g. Jane Appleseed"
          onKeyDown={handleLettersKeyPress}
          maxLength="30"
          nameerror={nameError}
        />
        {nameError && <ErrorName>{nameError}</ErrorName>}
        <CardNumb>Card Number</CardNumb>
        <NumberInput
          onChange={numberInputChange}
          placeholder="e.g. 1234 5678 9123 0000"
          pattern="[0-9E]*"
          onInvalid={(e) => e.preventDefault()}
          onKeyDown={handleNumberKeyPress}
          numbererror={numberError}
        />{" "}
        {numberError && <ErrorNumber>{numberError}</ErrorNumber>}
        <ExpDates>
          Exp. Date (MM/YY) <Span> CVC</Span>
        </ExpDates>
        <LastDetails>
          <MonthInput
            onChange={monthInputChange}
            placeholder="MM"
            pattern="[0-9]*"
            onKeyDown={handleMonthInput}
            montherror={monthError}
          />
          {monthError && <ErrorMonth>{monthError}</ErrorMonth>}
          <YearInput
            onChange={yearInputChange}
            ref={yearInputRef}
            placeholder="YY"
            pattern="[0-9]*"
            onKeyDown={handleYearInput}
            yearerror={yearError}
          />
          {yearError && <ErrorMessage>{yearError}</ErrorMessage>}
          <CvcInput
            onChange={cvcInputChange}
            ref={cvcInputRef}
            placeholder="e.g. 123"
            pattern="[0-9]*"
            onKeyDown={handleCvcInput}
            maxLength="3"
            cvcerror={cvcError}
          />
          {cvcError && <ErrorCvc>{cvcError}</ErrorCvc>}
        </LastDetails>
        <ConfirmBtn onClick={clickConfirm}>Confirm</ConfirmBtn>
      </DetailsDiv>
    </>
  );
};
const ErrorName = styled.p`
  color: var(--Red, #ff5050);
  font-size: 11px;
  position: absolute;
  top: 31.5%;
`;
const ErrorNumber = styled.p`
  color: var(--Red, #ff5050);
  font-size: 11px;
  position: absolute;
  top: 52.5%;
`;

const ErrorMonth = styled.p`
  color: var(--Red, #ff5050);
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  position: absolute;
  top: 73%;
`;
const ErrorMessage = styled.p`
  color: var(--Red, #ff5050);
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  position: absolute;
  top: 73%;
  left: 28%;
`;
const ErrorCvc = styled.p`
  color: var(--Red, #ff5050);
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  position: absolute;
  top: 73%;
  left: 51%;
`;

const DetailsDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  position: relative;
  width: 375px;
  @media (min-width: 1440px) {
    position: absolute;
    top: 25%;
    right: 15%;
  }
`;

const CardName = styled.p`
  color: var(--Deep-Violet, #21092f);
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-top: 48px;
  margin-bottom: 9px;
`;

const NameInput = styled.input`
  width: 327px;
  height: 45px;
  border-radius: 8px;
  border: 1px solid
    ${(props) =>
      props.nameerror !== ""
        ? "var(--Red, #ff5050)"
        : "var(--Light-Grey, #dfdee0)"} !important;
  background: var(--White, #fff);
  outline: none;
  &::placeholder {
    color: var(--Deep-Violet, #21092f);
    opacity: 0.25;
    text-indent: 16px;
    font-family: Space Grotesk;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  &:not(:placeholder-shown) {
    color: var(--Deep-Violet, #21092f);
    text-indent: 16px;
    font-family: Space Grotesk;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
  }
  @media (min-width: 1440px) {
    width: 381px;
    height: 45px;
  }
`;

const CardNumb = styled.p`
  color: var(--Deep-Violet, #21092f);
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-top: 25px;
  margin-bottom: 9px;
  @media (min-width: 1440px) {
    margin-top: 26px;
  }
`;

const NumberInput = styled.input`
  width: 327px;
  height: 45px;
  border-radius: 8px;
  border: 1px solid
    ${(props) =>
      props.numbererror !== ""
        ? "var(--Red, #ff5050)"
        : "var(--Light-Grey, #dfdee0)"} !important;

  background: var(--White, #fff);
  outline: none;
  &::placeholder {
    color: var(--Deep-Violet, #21092f);
    opacity: 0.25;
    text-indent: 16px;
    font-family: Space Grotesk;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  &:not(:placeholder-shown) {
    color: var(--Deep-Violet, #21092f);
    text-indent: 16px;
    font-family: Space Grotesk;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
  }
  @media (min-width: 1440px) {
    width: 381px;
    height: 45px;
  }
`;

const ExpDates = styled.p`
  color: var(--Deep-Violet, #21092f);
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-top: 25px;
  margin-bottom: 9px;
  @media (min-width: 1440px) {
    margin-top: 26px;
  }
`;

const LastDetails = styled.div`
  display: flex;
  gap: 10px;
`;

const Span = styled.span`
  color: var(--Deep-Violet, #21092f);
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-left: 20px;
  @media (min-width: 1440px) {
    margin-left: 50px;
  }
`;

const MonthInput = styled.input`
  width: 72px;
  height: 45px;
  border-radius: 8px;
  border: 1px solid
    ${(props) =>
      props.montherror !== ""
        ? "var(--Red, #ff5050)"
        : "var(--Light-Grey, #dfdee0)"} !important;
  background: var(--White, #fff);
  outline: none;
  &::placeholder {
    color: var(--Deep-Violet, #21092f);
    opacity: 0.25;
    text-indent: 16px;
    font-family: Space Grotesk;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  &:not(:placeholder-shown) {
    color: var(--Deep-Violet, #21092f);
    text-indent: 16px;
    font-family: Space Grotesk;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
  }
  @media (min-width: 1440px) {
    width: 80px;
    height: 45px;
  }
`;
const YearInput = styled.input`
  width: 72px;
  height: 45px;
  border-radius: 8px;
  border: 1px solid
    ${(props) =>
      props.yearerror !== ""
        ? "var(--Red, #ff5050)"
        : "var(--Light-Grey, #dfdee0)"} !important;
  background: var(--White, #fff);
  outline: none;
  &::placeholder {
    color: var(--Deep-Violet, #21092f);
    opacity: 0.25;
    text-indent: 16px;
    font-family: Space Grotesk;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  &:not(:placeholder-shown) {
    color: var(--Deep-Violet, #21092f);
    text-indent: 16px;
    font-family: Space Grotesk;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
  }
  @media (min-width: 1440px) {
    width: 80px;
    height: 45px;
  }
`;
const CvcInput = styled.input`
  width: 164px;
  height: 45px;
  border-radius: 8px;
  border: 1px solid
    ${(props) =>
      props.cvcerror !== ""
        ? "var(--Red, #ff5050)"
        : "var(--Light-Grey, #dfdee0)"} !important;
  background: var(--White, #fff);
  outline: none;
  &::placeholder {
    color: var(--Deep-Violet, #21092f);
    opacity: 0.25;
    text-indent: 16px;
    font-family: Space Grotesk;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  &:not(:placeholder-shown) {
    color: var(--Deep-Violet, #21092f);
    text-indent: 16px;
    font-family: Space Grotesk;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
  }
  @media (min-width: 1440px) {
    width: 191px;
    height: 45px;
    margin-left: 10px;
  }
`;
const ConfirmBtn = styled.button`
  width: 327px;
  height: 53px;
  border-radius: 8px;
  background: var(--Deep-Violet, #21092f);
  color: var(--White, #fff);
  border: none;
  font-family: Space Grotesk;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 28px;
  margin-bottom: 21px;
  @media (min-width: 1440px) {
    width: 381px;
    height: 53px;
  }
`;
export default Forms;
