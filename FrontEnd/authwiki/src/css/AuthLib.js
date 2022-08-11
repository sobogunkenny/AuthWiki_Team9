import styled from "styled-components";

const AuthLibCSS = styled.div`
  .single-page {
    grid-auto-rows: minmax(100px, auto);
    margin-top: 80px;
  }
  .cta-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .cta-section {
    font-size: 20px;
  }
  .cta-section img {
    height: 100px;
    width: 200px;
  }
  .description {
    border: 2px solid rgba(255, 255, 255, 0.06);
    padding: 10px;
    margin-top: 30px;
  }
  .depend {
    margin-top: 30px;
    display: flex;
    gap: 2px;
  }
  .depend {
    /* padding: 0 10px; */
  }
  .dependency {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .title {
    display: flex;
    gap: 10px;
    align-items: center;
    border-left: 2px solid rgba(255, 255, 255, 0.06);
    border-right: 2px solid rgba(255, 255, 255, 0.06);
    padding: 20px;
  }
  span {
    color: #2eb394;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
  }
  #aut {
    background-color: #2eb394;
    color: #051d36;
    width: 100px;
    border-radius: 5px;
    padding-top: 10px;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
  }
  p {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0em;
    text-align: left;
  }
  h4 {
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 0em;
    text-align: left;
  }
  /* #installation {
    height: 50px;
    width: 700px;
    padding: 5px;
    background-color: #051d36;
  } */
  .comment {
    .input-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 10px;
      /* width: 80%;
    margin: 0 auto; */
    }
    input {
      padding: 0.5em;
      border: none;
      outline: none;
      background-color: transparent;
      border: 2px solid #2eb394;
      border-radius: 8px;
      color: #fdfef8;
      font-size: 1.2em;
    }

    ::placeholder {
      color: #fdfef8;
      padding: 0;
    }
    .btn {
      font-size: 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      background-color: #2eb394;
      width: 150px;
      padding: 10px;
    }
  }

  /* .btn:hover {
    background-color: transparent;
    color: #fdfef8;
    border: 2px solid #d9d9d9;
  } */
`;

export default AuthLibCSS;
