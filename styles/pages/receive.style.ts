import css from 'styled-jsx/css';

export default css.global`
  .icon-large {
    font-size: 48px;
  }

  .body {
    background: #fff;
    color: #666666;
    font-family: 'Open Sans', sans-serif;
    overflow-x: hidden;
  }

  .btn-primary,
  .btn-primary:hover,
  .btn-primary:focus {
    color: #fff;
    background-color: #168c50;
    border-color: #0b501d;
  }

  a {
    color: #1dc8cd;
    cursor: pointer;
  }

  a:hover,
  a:active,
  a:focus {
    color: #1dc9ce;
    outline: none;
    text-decoration: none;
  }

  p {
    padding: 0;
    margin: 0 0 30px 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    margin: 0 0 20px 0;
    padding: 0;
  }

  .section-header .section-title {
    font-size: 32px;
    color: #111;
    text-align: center;
    font-weight: 400;
  }

  .section-header .section-description {
    text-align: center;
    padding-bottom: 40px;
    color: #777;
    font-style: italic;
  }

  .section-header .section-divider {
    display: block;
    width: 60px;
    height: 3px;
    background: #1dc8cd;
    background: linear-gradient(0deg, #1dc8cd 0%, #55fabe 100%);
    margin: 0 auto;
    margin-bottom: 20px;
  }

  .section-bg {
    background: #eff5f5;
  }

  #more-features {
    overflow: hidden;
    margin-top: 100px;
  }

  #more-features .box {
    padding: 40px;
    box-shadow: 0px 0px 30px rgba(73, 78, 92, 0.15);
    background: #fff;
  }

  #more-features h4 {
    font-weight: 700;
    margin-bottom: 15px;
    font-size: 18px;
  }

  #more-features h4 a {
    color: #111;
  }

  #more-features p {
    font-size: 14px;
    margin-bottom: 0;
    line-height: 24px;
  }

  .warning-icon {
    float: left;
    font-size: 30px;
    padding-left: 40px;
    color: #cd1d1d;
  }

  @media (max-width: 767px) {
    #more-features .box {
      padding: 10px;
      margin-bottom: 20px;
    }

    #more-features .icon {
      float: none;
      text-align: center;
      padding-bottom: 15px;
    }

    #more-features h4,
    #more-features p {
      margin-left: 0;
      text-align: center;
    }
  }

  .main-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: #eff5f5;
    font-family: 'Lato', sans-serif;
  }

  .create-account {
    font-size: 18px !important;
    text-align: center;
    color: #1dc8cd;
  }

  .hr-dotted {
    border-top: dashed 1px silver;
  }
`;
