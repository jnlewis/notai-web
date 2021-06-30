import css from 'styled-jsx/css';

export default css.global`
  .wrapper {
    margin: 30px;
  }

  .btn-primary,
  .btn-primary:hover,
  .btn-primary:focus {
    color: #fff;
    background-color: #168c50;
    border-color: #0b501d;
  }

  .card {
    margin-bottom: 30px;
  }

  .card-link {
    border: solid 1px;
  }

  .selectable-item:hover {
    cursor: pointer;
    text-decoration: none;
  }
  .selectable-item:hover > .card {
    background-color: #f5f5f5;
  }

  .hr-dotted {
    border-top: dashed 1px silver;
  }
`;
