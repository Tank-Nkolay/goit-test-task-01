import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  height: 460px;
  background-color: red;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  padding-top: 28px;
  padding-left: 36px;
  padding-right: 36px;
  @media screen and (min-width: 768px) {
    width: 380px;
  }
`;

export const BoxLine = styled.div`
  position: absolute;
  left: 0;
  top: 214px;
  width: 320px;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
  @media screen and (min-width: 768px) {
    width: 380px;
  }
`;

export const ImgLogo = styled.img`
  position: absolute;
  left: 20px;
  top: 20px;
  height: 22px;
  width: 76px;
  padding: 0;
  z-index: 10;
`;

export const ImgCentral = styled.img`
  position: absolute;
  left: 120px;
  top: 178px;
  height: 80px;
  width: 80px;
  padding: 0;
  z-index: 10;
  @media screen and (min-width: 768px) {
    left: 150px;
  }
`;

export const HeaderTweet = styled.h2`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #ebd8ff;
  margin-top: 88px;
  text-align: center;
`;

export const HeaderFollowers = styled.h2`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
  margin-top: 16px;
  text-align: center;
`;

export const BtnFollow = styled.button`
  width: 196px;
  height: 50px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  margin-top: 26px;
  background: #ebd8ff;
`;

export const BtnFollowing = styled.button`
  width: 196px;
  height: 50px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  margin-top: 26px;
  background: #5cd3a8;
`;
