import css from 'styled-jsx/css';

export default css.global`
  .wrapper {
    margin: 30px;
  }

  .more-link {
    color: #007bff;
  }

  .btn-primary,
  .btn-primary:hover,
  .btn-primary:focus {
    color: #fff;
    background-color: #168c50;
    border-color: #0b501d;
  }

  .create-button {
    min-width: 200px;
  }

  .form-section {
    background-color: #f3f3f3;
    border-radius: 5px;
    padding: 10px;
  }

  .preset-item:hover {
    cursor: pointer;
    text-decoration: none;
  }
  .preset-item:hover > .card {
    background-color: #f5f5f5;
  }
`;
