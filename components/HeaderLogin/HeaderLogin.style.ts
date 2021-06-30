import css from 'styled-jsx/css';

export default css.global`
  #header {
    padding: 30px 0;
    height: 92px;
    width: 100%;
    left: 0;
    top: 0;
    right: 0;
    transition: all 0.5s;
    z-index: 997;
  }

  #header #logo {
    float: left;
  }

  #header #logo h1 {
    font-size: 36px;
    margin: -4px 0 0 0;
    padding: 0;
    line-height: 1;
    display: inline-block;
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
    letter-spacing: 3px;
    text-transform: uppercase;
  }

  #header #logo h1 a,
  #header #logo h1 a:hover {
    color: #333;
  }

  #header #logo img {
    padding: 0;
    margin: 0;
  }

  #header.header-fixed {
    padding: 20px 0;
    height: 72px;
    transition: all 0.5s;
  }

  .nav-menu,
  .nav-menu * {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .nav-menu ul {
    position: absolute;
    display: none;
    top: 100%;
    left: 0;
    z-index: 99;
  }

  .nav-menu li {
    position: relative;
    white-space: nowrap;
  }

  .nav-menu > li {
    float: left;
  }

  .nav-menu li:hover > ul,
  .nav-menu li.sfHover > ul {
    display: block;
  }

  .nav-menu ul ul {
    top: 0;
    left: 100%;
  }

  .nav-menu ul li {
    min-width: 180px;
  }

  #nav-menu-container {
    float: right;
    margin: 0;
  }

  /* Nav Meu Styling */

  .nav-menu a {
    padding: 0 8px 10px 8px;
    text-decoration: none;
    display: inline-block;
    color: #333;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 14px;
    outline: none;
  }

  .nav-menu > li {
    margin-left: 10px;
  }

  .nav-menu ul {
    margin: 4px 0 0 0;
    padding: 10px;
    box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
    background: #333;
  }

  .nav-menu ul li {
    transition: 0.3s;
  }

  .nav-menu ul li a {
    padding: 10px;
    color: #333;
    transition: 0.3s;
    display: block;
    font-size: 13px;
    text-transform: none;
  }

  .nav-menu ul li:hover > a {
    color: #1dc8cd;
  }

  .nav-menu ul ul {
    margin: 0;
  }
`;
