import styled from "styled-components";
import styleVar from "../../assets/css/styleVar";

const RatingCardStyle = styled.div`
  color: #ffffff;
  @media screen and (max-width: 767px) {
    padding: 0 20px;
  }
  .acton-strip {
    display: flex;
    justify-content: space-between;
    margin: 28px 0;
    p {
      font-size: ${styleVar.font24};
      line-height: ${styleVar.lineHeight30};
      @media screen and (max-width: 767px) {
        font-size: 12px;
        line-height: 15px;
      }
      span {
        display: block;
        color: #ffc01f;
      }
    }
    .button-group {
      span {
        border: 1px solid #ffc01f;
        border-radius: 30px;
        color: #ffc01f;
        padding: 14px 34px;
        cursor: pointer;
        display: inline-block;
        @media screen and (max-width: 767px) {
          padding: 7px 20px 7px 7px;
          font-size: 12px;
          line-height: 15px;
        }
        &.sort-btn {
          background: #ffc01f;
          color: ${styleVar.lightBlue};
          margin-right: 23px;
          position: relative;
          &::after {
            content: "";
            position: absolute;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-bottom: 5px solid ${styleVar.lightBlue};
            transform: rotate(180deg);
            top: 20px;
            right: 20px;
            @media screen and (max-width: 767px) {
              top: 13px;
              right: 7px;
            }
          }
          @media screen and (max-width: 767px) {
            margin-right: 10px;
          }
        }
      }
    }
  }
  .rating-card-wrapper {
    display: flex;
    gap: 85px;
    flex-wrap: wrap;
    justify-content: center;
    @media screen and (max-width: 767px) {
      gap: 30px;
    }
    .rating-cards {
      max-width: 488px;
      width: 100%;
      background: ${styleVar.lightBlue};
      border-radius: 10px;
      display: flex;
      padding: 21px 10px 26px 10px;
      gap: 10px;
      .packed {
        width: 118px;
        height: 118px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: -40px 0 10px -20px;
        z-index: 9;
        span {
          width: 69px;
          height: 69px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 100%;
          background: linear-gradient(
            180deg,
            #4c235f 0%,
            #151745 51.56%,
            #322585 100%
          );
          box-shadow: 0px 0px 10px rgb(0 0 0 / 40%);
          z-index: 3;
        }
        &::after {
          position: absolute;
          content: "";
          background: linear-gradient(270deg, #f01c1c 35%, #e75e11 52.79%);
          width: 118px;
          height: 118px;
          border-radius: 100%;
          left: 0;
          top: 0;
          z-index: 1;
        }
        &::before {
          content: "";
          position: absolute;
          background: linear-gradient(
            218.66deg,
            rgba(225, 72, 7, 0.3) 38.13%,
            rgba(255, 0, 0, 0.3) 64.1%
          );
          filter: blur(2px);
          transform: matrix(-0.61, 0.8, 0.8, 0.61, 0, 0);
          height: 100px;
          width: 100px;
          border-radius: 100%;
          z-index: 2;
        }
      }
      .status {
        background: rgba(240, 28, 28, 0.15);
        border: 1px solid #f01c1c;
        border-radius: 15px;
        display: inline-block;
        font-size: 20px;
        line-height: 24px;
        padding: 3px 8px;
      }

      .rating-info {
        h2 {
          font-size: ${styleVar.font32};
          line-height: 39px;
          @media screen and (max-width: 767px) {
            font-size: ${styleVar.font20};
            line-height: 24px;
          }
        }
        .rating-star {
          padding: 9px 0;
          display: flex;
          gap: 10px;
          .fa {
            font-size: 20px;
            &.active {
              color: #faff00;
            }
          }
          .review-counts {
            font-size: ${styleVar.font16};
            line-height: 19px;
          }
        }
        .location {
          font-weight: 300;
          font-size: 16px;
          line-height: 19px;
          position: relative;
          padding-left: 25px;
          .fa {
            position: absolute;
            top: 10px;
            left: 0;
          }
        }
        .venue-distance {
          display: flex;
          justify-content: space-between;
          font-size: 16px;
          padding-top: 9px;
          .bars {
            font-size: 16px;
            line-height: 19px;
            color: #ffc01f;
            padding-right: 19px;
          }
          .bar-distance {
            font-size: 14px;
            line-height: 17px;
            .fa {
              color: #ffc01f;
              padding-right: 7px;
            }
          }
          .cardId {
            font-size: 20px;
            line-height: 24px;
            color: #ffc01f;
          }
        }
      }
    }
  }
`;

export default RatingCardStyle;
