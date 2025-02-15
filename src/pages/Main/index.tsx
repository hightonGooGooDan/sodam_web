import * as S from ".//style";
import Logo from "../../assets/logo.svg";
import CLogo from "../../assets/cLogo.svg";

const Main = () => {
  return (
    <S.Layout>
      <S.ProjectDetail>
        <S.Detail>소중한 순간, 함께 담아요</S.Detail>
        <S.Logo src={Logo} />
      </S.ProjectDetail>
      <S.LoginContainer>
        <S.CLogo src={CLogo} />
        <S.GoLogin>카카오 로그인</S.GoLogin>
      </S.LoginContainer>
    </S.Layout>
  );
};

export default Main;
