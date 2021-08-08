import React from "react";

import { Link } from "react-router-dom";

import RMDBLogo from "../../images/react-movie-logo.svg";

import TMDBLogo from "../../images/tmdb-logo.svg";

import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";

const Header = () => (
  <Wrapper>
    <Content>
      <Link to='/'>
      <LogoImg src={RMDBLogo} alr="rmdb-logo" />;
      </Link>
      <TMDBLogoImg src={TMDBLogo} alr="tmdb-logo" />;
    </Content>
  </Wrapper>
);

export default Header;
