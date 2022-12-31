import styled from "styled-components";
import styleVar from "../../assets/css/styleVar";

const CardStyle = styled.div`
  background: ${styleVar.lightBlue};
  padding: 18px 20px 0;
  max-width: 461px;
  min-height: 490px;
  width: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  border-radius: 20px;
  .card-content {
    color: ${styleVar.white};
    font-size: ${styleVar.font32};
    line-height: ${styleVar.lineHeight50};
    @media screen and (max-width: 767px) {
      font-size: ${styleVar.font20};
      line-height: ${styleVar.lineHeight30};
    }
  }
  .card-icon {
    width: 157px;
    height: 157px;
    margin-top: 40px;
    display: inline-block;
  }
  .cta {
    position: absolute;
    bottom: 0;
    left: 0;
    background: ${styleVar.yellow};
    color: ${styleVar.lightBlue};
    width: 100%;
    padding: 24px 0;
    font-size: ${styleVar.font32};
    line-height: ${styleVar.lineHeight30};
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    cursor: pointer;
  }
`;

export default CardStyle;
