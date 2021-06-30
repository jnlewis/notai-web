import css from 'styled-jsx/css';

export default css.global`

  .body {
    background: #fff;
    color: #666666;
    font-family: 'Open Sans', sans-serif;
    overflow-x: hidden;
  }

  a {
    color: #1dc8cd;
    transition: 0.5s;
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

  /*--------------------------------------------------------------
# Header
--------------------------------------------------------------*/

  #header {
    padding: 30px 0;
    height: 92px;
    position: fixed;
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
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    letter-spacing: 3px;
    text-transform: uppercase;
  }

  #header #logo h1 a,
  #header #logo h1 a:hover {
    color: #fff;
  }
  #header.header-fixed {
    background: #3bbfc1;
    padding: 20px 0;
    height: 72px;
    transition: all 0.5s;
  }

  #intro {
    width: 100%;
    height: 100vh;
    background: #3bbfc1;
    position: relative;
  }

  #intro .intro-text {
    position: absolute;
    left: 0;
    top: 60px;
    right: 0;
    height: 70%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    text-align: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  #intro h2 {
    margin: 30px 0 10px 0;
    padding: 0 15px;
    font-size: 48px;
    font-weight: 400;
    line-height: 56px;
    color: #fff;
  }

  #intro p {
    color: #fff;
    margin-bottom: 20px;
    padding: 0 15px;
    font-size: 24px;
  }

  #intro .btn-get-started {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 1px;
    display: inline-block;
    padding: 8px 28px;
    border-radius: 50px;
    transition: 0.5s;
    margin: 10px;
    border: 2px solid #fff;
    color: #fff;
  }
  #intro .btn-get-started:hover {
    color: #1dc8cd;
    background: #fff;
  }

  #intro .product-screens {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    text-align: center;
    width: 100%;
    height: 50%;
  }
  #intro .product-screens img {
    box-shadow: 0px -2px 19px 4px rgba(0, 0, 0, 0.29);
  }
  #intro .product-screens .product-screen-2 {
    position: absolute;
    z-index: 20;
    left: calc(30% - 154px);
    bottom: 0;
    top: 35px;
  }
  #intro .product-screens .product-screen-2 img {
    max-width: 900px;
  }

  /*--------------------------------------------------------------
# Navigation Menu
--------------------------------------------------------------*/

  /* Nav Menu Essentials */

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

  /* Nav Meu Container */

  #nav-menu-container {
    float: right;
    margin: 0;
  }
  #nav-menu-container-mobile {
    float: right;
    margin: 0;
    display: none;
  }

  /* Nav Meu Styling */

  .nav-menu a {
    padding: 0 8px 10px 8px;
    text-decoration: none;
    display: inline-block;
    color: #fff;
    font-family: 'Montserrat', sans-serif;
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
    background: #fff;
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

  /*--------------------------------------------------------------
# Sections
--------------------------------------------------------------*/

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

  /* Product Featuress Section
--------------------------------*/

  #features {
    background: #fff;
    padding: 60px 0 0 0;
    overflow: hidden;
  }

  #features .features-img {
    text-align: center;
    padding-top: 20px;
  }

  #features .features-img img {
    max-width: 100%;
  }

  #features .box {
    margin-bottom: 15px;
    text-align: center;
  }

  #features .icon {
    margin-bottom: 10px;
  }

  #features .icon i {
    height: 50px;
    font-size: 50px;
    transition: 0.5s;
    background: #1dc8cd;
    background: linear-gradient(45deg, #1dc8cd 0%, #55fabe 100%);
    background-clip: border-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  #features .title {
    font-weight: 300;
    margin-bottom: 15px;
    font-size: 22px;
  }

  #features .title a {
    color: #111;
  }

  #features .description {
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 10px;
  }

  #features .section-description {
    padding-bottom: 10px;
  }

  /* Product Advanced Featuress Section
--------------------------------*/

  #advanced-features {
    overflow: hidden;
  }

  #advanced-features .features-row {
    padding: 60px 0 30px 0;
  }

  #advanced-features h2 {
    font-size: 26px;
    font-weight: 700;
    color: #000;
  }

  #advanced-features h3 {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    font-style: italic;
    color: #999;
  }

  #advanced-features p {
    line-height: 24px;
    color: #777;
    margin-bottom: 30px;
  }

  #advanced-features i {
    color: #666666;
    font-size: 64px;
    transition: 0.5s;
    float: left;
    padding: 0 15px 0px 0;
    line-height: 1;
  }

  #advanced-features i:before {
    background: #1dc8cd;
    background: linear-gradient(45deg, #1dc8cd 0%, #55fabe 100%);
    background-clip: border-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  #advanced-features .advanced-feature-img-right {
    width: 555px;
    max-width: 100%;
    float: right;
    padding: 0 0 30px 30px;
  }

  #advanced-features .advanced-feature-img-left {
    max-width: 100%;
    float: left;
    padding: 0 30px 30px 0;
  }

  /* Call To Action Section
--------------------------------*/

  #call-to-action {
    overflow: hidden;
    background: linear-gradient(rgba(29, 200, 205, 0.65), rgba(29, 205, 89, 0.2)),
      url('/assets/img/call-to-action-bg.jpg');
    background-size: cover;
    padding: 80px 0;
  }

  #call-to-action .cta-title {
    color: #fff;
    font-size: 28px;
    font-weight: 700;
  }

  #call-to-action .cta-text {
    color: #fff;
  }

  #call-to-action .cta-btn {
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 1px;
    display: inline-block;
    padding: 8px 30px;
    border-radius: 25px;
    transition: background 0.5s;
    margin: 10px;
    border: 2px solid #fff;
    color: #fff;
  }

  #call-to-action .cta-btn:hover {
    background: #1dc8cd;
    border: 2px solid #1dc8cd;
  }

  /* More Features Section
--------------------------------*/

  #more-features {
    padding: 60px 0 60px 0;
    overflow: hidden;
  }

  #more-features .box {
    padding: 40px;
    margin-bottom: 30px;
    box-shadow: 0px 0px 30px rgba(73, 78, 92, 0.15);
    background: #fff;
    transition: 0.4s;
  }

  #more-features .icon {
    float: left;
  }

  #more-features .icon i {
    width: 50px;
    height: 50px;
    font-size: 50px;
    background: #1dc8cd;
    background: linear-gradient(45deg, #1dc8cd 0%, #55fabe 100%);
    background-clip: border-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  #more-features h4 {
    margin-left: 100px;
    font-weight: 700;
    margin-bottom: 15px;
    font-size: 18px;
  }

  #more-features h4 a {
    color: #111;
  }

  #more-features p {
    font-size: 14px;
    margin-left: 100px;
    margin-bottom: 0;
    line-height: 24px;
  }

  /* Contact Section
--------------------------------*/

  #contact {
    box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.1);
    padding: 60px 0;
    overflow: hidden;
  }

  #contact .contact-about h3 {
    font-size: 36px;
    margin: 0 0 10px 0;
    padding: 0;
    line-height: 1;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #1dc8cd;
  }

  #contact .contact-about p {
    font-size: 14px;
    line-height: 24px;
    font-family: 'Montserrat', sans-serif;
    color: #888;
  }

  #contact .social-links {
    padding-bottom: 20px;
  }

  #contact .social-links a {
    font-size: 18px;
    display: inline-block;
    background: #fff;
    color: #1dc8cd;
    line-height: 1;
    padding: 8px 0;
    margin-right: 4px;
    border-radius: 50%;
    text-align: center;
    width: 36px;
    height: 36px;
    transition: 0.3s;
    border: 1px solid #1dc8cd;
  }

  #contact .info {
    color: #333333;
  }

  #contact .info i {
    font-size: 32px;
    color: #1dc8cd;
    float: left;
    line-height: 1;
  }

  #contact .info p {
    padding: 0 0 10px 42px;
    line-height: 28px;
    font-size: 14px;
  }

  /*--------------------------------------------------------------
# Footer
--------------------------------------------------------------*/

  #footer {
    background: #fff;
    box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.1);
    padding: 30px 0;
    color: #333;
    font-size: 14px;
  }

  #footer .credits {
    font-size: 13px;
    color: #888;
  }

  #footer .footer-links a {
    color: #666;
    padding-left: 15px;
  }

  #footer .footer-links a:first-child {
    padding-left: 0;
  }

  #footer .footer-links a:hover {
    color: #1dc8cd;
  }

  @media (min-width: 769px) {
    #features .features-img {
      padding-top: 120px;
      margin-top: -200px;
    }

    #call-to-action .cta-btn-container {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: end;
      -webkit-justify-content: flex-end;
      -ms-flex-pack: end;
      justify-content: flex-end;
    }
  }

  @media (min-width: 1025px) {
    #intro {
      background-attachment: fixed;
    }
  }

  @media (max-width: 768px) {
    #header #logo h1 {
      font-size: 28px;
      margin-top: 0;
    }

    #header #logo img {
      max-height: 40px;
    }

    #intro h2 {
      font-size: 28px;
      line-height: 36px;
    }

    #intro p {
      font-size: 18px;
      line-height: 24px;
      margin-bottom: 20px;
    }

    #nav-menu-container {
      display: none;
    }
    #nav-menu-container-mobile {
      display: block;
    }

    #mobile-nav-toggle {
      display: inline;
    }

    #about .about-img {
      height: auto;
    }

    #about .about-img img {
      margin-left: 0;
      padding-bottom: 30px;
    }

    #advanced-features .advanced-feature-img-right,
    #advanced-features .advanced-feature-img-left {
      max-width: 50%;
    }

    #faq #faq-list a {
      font-size: 18px;
    }

    #faq #faq-list i {
      top: 13px;
    }
  }

  @media (max-width: 767px) {
    #intro .product-screens .product-screen-1 {
      position: static;
      padding-top: 30px;
    }

    #intro .product-screens .product-screen-3 {
      display: none;
    }

    #advanced-features .advanced-feature-img-right,
    #advanced-features .advanced-feature-img-left {
      max-width: 100%;
      float: none;
      padding: 0 0 30px 0;
    }

    #more-features .box {
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
`;
