import styled from "styled-components";
const ConfirmCard = () => {
  return (
    <>
      <FinishedCard>
        <ConfirmSign src="./images/icon-complete.svg" />
        <ThankYou>THANK YOU!</ThankYou>
        <AddedCard>We’ve added your card details</AddedCard>
        <ContinueBtn>Continue</ContinueBtn>
      </FinishedCard>
    </>
  );
};
const FinishedCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 1440px) {
    position: absolute;
    top: 21%;
    left: 61%;
  }
`;
const ConfirmSign = styled.img`
  width: 80px;
  height: 80px;
  margin-top: 88px;
`;
const ThankYou = styled.h1`
  color: var(--Deep-Violet, #21092f);
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 3.422px;
  margin-top: 35px;
  margin-bottom: 16px;
`;
const AddedCard = styled.p`
  color: var(--Purplish-Grey, #8f8694);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 48px;
`;
const ContinueBtn = styled.button`
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
  margin-bottom: 82px;
`;

export default ConfirmCard;
