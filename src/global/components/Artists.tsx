import styled from "styled-components";
import User from "./User";

const Container = styled.div`
  background-color: rgba(23, 23, 23, 1);
  padding: 30px 20px;
  p {
    font-size: 1.8rem;
    margin-block: 20px;
    color: white;
  }
  button {
    width: 233px;
    display: block;
    margin: 0 auto;
    padding: 10px 20px;
    border-radius: 40px;
    background-color: white;
    color: black;
    font-size: 2rem;
    font-weight: bold;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-weight: bold;
    font-size: 2rem;
    color: rgba(204, 204, 204, 1);
  }
  article {
    display: flex;
    gap: 10px;
    align-items: center;
  }
`;

const AllUsers = styled.div`
  display: grid;
  gap: 10px;
`;

const Artists = () => {
  return (
    <Container>
      <Header>
        <span>Friend Activity</span>
        <article>
          <svg
            width="17"
            height="21"
            viewBox="0 0 17 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.4165 6.14943C3.4165 3.32115 5.69283 1.75 7.55525 1.75C10.0175 1.75 12.0018 3.72612 12.0018 6.14943C12.0018 7.19477 11.3886 8.69027 10.4846 9.89232C10.0185 10.5121 9.79602 11.3324 9.83022 12.0964C9.86434 12.8585 10.1656 13.6949 10.9085 14.1938L14.6582 16.7122C14.7647 16.8051 14.9197 16.993 15.0532 17.2299C15.2024 17.4949 15.2497 17.688 15.2497 17.7539V18.9167H7.55525V20.4167H16.7497V17.7539C16.7497 17.3039 16.5547 16.8393 16.3601 16.4937C16.1582 16.1354 15.8792 15.7687 15.5788 15.5269L15.5536 15.5066L11.7448 12.9486C11.5197 12.7974 11.3492 12.4857 11.3287 12.0293C11.3084 11.5748 11.4486 11.1061 11.6834 10.7939C12.6941 9.45002 13.5018 7.64193 13.5018 6.14943C13.5018 2.88483 10.833 0.25 7.55525 0.25C4.97351 0.25 1.9165 2.38767 1.9165 6.14943C1.9165 7.99397 2.53044 9.18827 3.19414 10.1293C3.35505 10.3575 3.51861 10.5705 3.66974 10.7663L3.70203 10.8081L3.70208 10.8082C3.84341 10.9913 3.97145 11.1571 4.09005 11.3225C4.34417 11.677 4.51934 11.9823 4.61325 12.3039L6.05309 11.8833C5.88993 11.3247 5.60324 10.8588 5.30916 10.4486C5.17423 10.2604 5.03026 10.0739 4.89255 9.89561L4.85722 9.84985C4.7059 9.65378 4.56023 9.4637 4.41994 9.26479C3.87884 8.49757 3.4165 7.59991 3.4165 6.14943ZM2.58333 21L2.58333 18.4166H0V16.9166H2.58334L2.58334 14.3333H4.08334L4.08334 16.9166H6.66647V18.4166H4.08333L4.08333 21L2.58333 21Z"
              fill="#B3B3B3"
            />
          </svg>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.291294 16.2446C-0.110688 16.6597 -0.0948373 17.3172 0.326698 17.713C0.748234 18.1089 1.41583 18.0933 1.81781 17.6782L8.99996 10.2614L16.1821 17.6782C16.5841 18.0933 17.2517 18.1089 17.6732 17.713C18.0948 17.3172 18.1106 16.6597 17.7086 16.2446L10.4573 8.75641L17.2369 1.75538C17.6388 1.34026 17.623 0.682838 17.2015 0.286978C16.7799 -0.108882 16.1123 -0.0932724 15.7104 0.321842L8.99996 7.25145L2.28958 0.321845C1.8876 -0.0932696 1.22 -0.108879 0.798467 0.28698C0.376931 0.682841 0.36108 1.34027 0.763062 1.75538L7.54261 8.75641L0.291294 16.2446Z"
              fill="#B3B3B3"
            />
          </svg>
        </article>
      </Header>
      <p>Let friends and followers on Spotify see what you’re listening to.</p>
      <AllUsers>
        {Array(3)
          .fill(1)
          .map((_, i) => (
            <User key={i} />
          ))}
      </AllUsers>
      <p>
        Go to Settings Social and enable “Share my listening activity on
        Spotify.’ You can turn this off at any time.
      </p>
      <button>SETTINGS</button>
    </Container>
  );
};

export default Artists;
