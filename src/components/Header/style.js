import styled from "styled-components";
import styleVar from "../../assets/css/styleVar";

const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${styleVar.lightBlue};
  padding: 24px 80px;
  @media screen and (max-width: 767px) {
    padding: 12px 20px;
  }
  .social-links {
    display: flex;
    gap: 20px;
  }
`;

export default HeaderStyle;
