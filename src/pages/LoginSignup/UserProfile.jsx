import { useState, useEffect } from "react";
import styled from "styled-components";
import BackButton from "../../assets/images/getback.png";
import { Link } from "react-router-dom";
import { userLogin } from "../../librarys/login-api";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: white;
  min-height: calc(var(--vh) * 100);
  margin: 0 auto;
  max-width: 1000px;
  padding-top: 30px;
  padding-left: 50px;
  position: relative;
  z-index: 1;
`;

const BackButtonImage = styled.img`
  position: absolute;
  left: 15px;
  margin-top: -20px;
  cursor: pointer;
`;

const HeaderTitle = styled.h1`
  font-family: "Nanum Gothic";
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.02em;
  text-align: center;
  color: #151515;
`;

const HeaderName = styled.h1`
  font-family: "Nanum Gothic";
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.02em;
  text-align: center;
  color: #151515;
`;

const HeaderEmail = styled.h1`
  font-family: "Nanum Gothic";
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.02em;
  text-align: center;
  color: #151515;
`;

const Header = styled.header`
  width: 111%;
  height: 50px;
  background: #eef1f4;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: -31px;
  margin-left: -50px;
`;

function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loginUser = async () => {
      const loginInfo = await userLogin("likelion1@example.com", "qwerty123");
      setUser(loginInfo);
    };

    loginUser();
  }, []);

  return (
    <PageContainer>
      <Header>
        <Link to="/">
          <BackButtonImage src={BackButton} alt="Back" />
        </Link>
        <HeaderTitle>안녕하세요</HeaderTitle>
        {user ? (
          <>
            <HeaderName>{user.name} 님,</HeaderName>
            <HeaderEmail>{user.email}</HeaderEmail>
          </>
        ) : (
          <HeaderName>Loading...</HeaderName>
        )}
      </Header>
    </PageContainer>
  );
}

export default UserProfile;