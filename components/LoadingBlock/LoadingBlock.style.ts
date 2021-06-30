import css from 'styled-jsx/css';

export default css.global`
  .loading-container {
    height: 100px;
    padding: 10px;
  }

  .loading {
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: wave;
    animation-timing-function: linear;
    -webkit-animation-duration: 1s;
    -webkit-animation-fill-mode: forwards;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-name: wave;
    -webkit-animation-timing-function: linear;
    -moz-animation-duration: 1s;
    -moz-animation-fill-mode: forwards;
    -moz-animation-iteration-count: infinite;
    -moz-animation-name: wave;
    -moz-animation-timing-function: linear;
    background: #dddddd;
    background-image: -webkit-gradient(
      linear,
      left center,
      right center,
      from(#dddddd),
      color-stop(0.2, #f5f5f5),
      color-stop(0.4, #e5e5e5),
      to(#dddddd)
    );
    background-image: -webkit-linear-gradient(
      left,
      #dddddd 0%,
      #f5f5f5 20%,
      #e5e5e5 40%,
      #dddddd 100%
    );
    background-image: -moz-gradient(
      linear,
      left center,
      right center,
      from(#dddddd),
      color-stop(0.2, #f5f5f5),
      color-stop(0.4, #e5e5e5),
      to(#dddddd)
    );
    background-image: -moz-linear-gradient(
      left,
      #dddddd 0%,
      #f5f5f5 20%,
      #e5e5e5 40%,
      #dddddd 100%
    );
    background-repeat: no-repeat;
    background-size: 800px 104px;
    height: 104px;
    position: relative;
  }
  .reverse-direction .loading {
    -webkit-animation-direction: reverse;
    -moz-animation-direction: reverse;
  }
  .loading div {
    background: #fff;
    height: 6px;
    left: 0;
    position: absolute;
    right: 0;
  }

  @-webkit-keyframes wave {
    0% {
      background-position: -468px 0;
    }
    100% {
      background-position: 468px 0;
    }
  }
  @-moz-keyframes wave {
    0% {
      background-position: -468px 0;
    }
    100% {
      background-position: 468px 0;
    }
  }
`;
