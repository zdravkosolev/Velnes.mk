import styled from "styled-components";
import { IconButton } from "../../styles/Buttons/Buttons";
import { theme } from "../../styles/themeStyles";
import ProfileIcon from "../../styles/Icons/Common/UserIcon";
import LogoIcon from "../../styles/Icons/logo/LogoIcon";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <HeaderStyled>
      <NavStyled>
        <a href="/">
          <LogoIcon />
        </a>
        <IconButton
          bg={theme.colors.secondary.orange}
          color={theme.colors.primary.black}
          href="/"
        >
          <div onClick={() => navigate("/profile")}>
            <ProfileIcon size={24} />
          </div>
        </IconButton>
      </NavStyled>
    </HeaderStyled>
  );
};

export default Navbar;
const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 11111;
  background: ${theme.colors.secondary.orange};
`;

const NavStyled = styled.nav`
  display: flex;
  padding: 16px 24px;
  justify-content: space-between;
  align-items: center;
`;
