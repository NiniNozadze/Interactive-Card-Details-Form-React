import styled from "styled-components";
const Cards = (props) => {
  return (
    <>
      <ColorFullCard src="./images/bg-main-mobile.png" />
      <BackgroundImage src="./images/bg-main-desktop.png" />
      <TwoCardsDiv>
        <BackgroundCard src="./images/bg-card-back.png" />
        <ThreeZero>{props.cvc === "" ? "000" : props.cvc}</ThreeZero>
        <DivForElements>
          <FrontCard src="./images/bg-card-front.png" />
          <LogoCard src="./images/card-logo.svg" />
          <CardNumbers>
            {props.cardNumber === "" ? "0000 0000 0000 0000" : props.cardNumber}
          </CardNumbers>
          <Surname>
            {props.holderName === "" ? "JANE APPLESEED" : props.holderName}
          </Surname>
          <Date>
            {props.month === "" ? "00" : props.month}/
            {props.year === "" ? "00" : props.year}
          </Date>
        </DivForElements>
      </TwoCardsDiv>
    </>
  );
};
const DivForElements = styled.div`
  width: 375px;
  height: 240px;
  margin-top: -193px;
  position: relative;
  @media (min-width: 1440px) {
    width: 447px;
    height: 245px;
  }
`;
const ColorFullCard = styled.img`
  width: 375px;
  height: 240px;

  @media (min-width: 1440px) {
    width: 447px;
    height: 245px;
    display: none;
  }
`;
const BackgroundImage = styled.img`
  display: none;
  @media (min-width: 1440px) {
    display: block;
    height: 100%;
  }
`;
const TwoCardsDiv = styled.div`
  position: absolute;
  top: 0%;
  @media (min-width: 1440px) {
    position: relative;
    height: 527px;
    width: 520px;
    margin-left: 135px;
    margin-top: -776px;
  }
`;
const BackgroundCard = styled.img`
  width: 286px;
  height: 157px;
  margin-top: 32px;
  margin-left: 73px;
  @media (min-width: 1440px) {
    width: 447px;
    height: 245px;
    margin: 0;
    position: absolute;
    top: 53%;
    right: -11%;
  }
`;
const ThreeZero = styled.span`
  position: absolute;
  top: 43%;
  right: 13%;
  color: var(--White, #fff);
  text-align: right;
  font-size: 9px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 1.286px;
  text-transform: uppercase;
  @media (min-width: 1440px) {
    font-size: 14px;
    letter-spacing: 2px;
    top: 74%;
    right: 0%;
  }
`;
const FrontCard = styled.img`
  width: 285px;
  height: 156.208px;
  position: absolute;
  top: 50%;
  left: 4%;
  @media (min-width: 1440px) {
    width: 447px;
    height: 245px;
    margin: 0;
    position: absolute;
    right: 8%;
    top: 7%;
  }
`;
const LogoCard = styled.img`
  position: absolute;
  top: 57%;
  right: 76%;
  width: 54px;
  height: 30px;
  @media (min-width: 1440px) {
    width: 84px;
    height: 47px;
    top: 19%;
    left: 12%;
  }
`;
const CardNumbers = styled.p`
  color: var(--White, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 2.2px;
  position: absolute;
  top: 86%;
  right: 25%;
  @media (min-width: 1440px) {
    font-size: 28px;
    letter-spacing: 3.422px;
    top: 61%;
    right: 4%;
  }
`;
const Surname = styled.p`
  color: var(--White, #fff);
  font-size: 9px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 1.286px;
  position: absolute;
  top: 103%;
  right: 65%;
  @media (min-width: 1440px) {
    font-size: 14px;
    letter-spacing: 2px;
    top: 88%;
    right: 56%;
  }
`;
const Date = styled.span`
  color: var(--White, #fff);
  text-align: right;
  font-size: 9px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 1.286px;
  text-transform: uppercase;
  position: absolute;
  top: 103%;
  right: 23%;
  @media (min-width: 1440px) {
    font-size: 14px;
    letter-spacing: 2px;
    top: 88%;
    right: 1%;
  }
`;
export default Cards;
