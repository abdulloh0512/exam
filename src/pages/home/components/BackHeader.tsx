import styled from "styled-components";
import Back from "./Back";
import { useNavigate } from "react-router-dom";

const Header = styled.header`
  width: 100%;
  padding: 20px 0;
  display: flex;
  gap: 22px;
`;
const BackHeader = () => {
  const navigate = useNavigate();
  return (
    <Header>
      <Back
        onClick={() => navigate(-1)}
        svg={
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.5" cx="20" cy="20" r="20" fill="black" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.5426 19.302C12.1382 19.7064 12.1547 20.3669 12.5788 20.7506L23.2737 30.4269C23.7856 30.8901 24.5761 30.8506 25.0392 30.3386C25.5024 29.8267 25.4629 29.0362 24.951 28.5731L15.4254 19.9547L24.9962 10.3839C25.4843 9.89573 25.4843 9.10427 24.9962 8.61612C24.508 8.12796 23.7166 8.12796 23.2284 8.61612L12.5426 19.302Z"
              fill="white"
            />
          </svg>
        }
      />
      <Back
        onClick={() => {}}
        svg={
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.5" cx="20" cy="20" r="20" fill="black" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M27.0702 19.302C27.4745 19.7064 27.458 20.3669 27.034 20.7506L16.3391 30.4269C15.8272 30.8901 15.0367 30.8506 14.5735 30.3386C14.1103 29.8267 14.1499 29.0362 14.6618 28.5731L24.1874 19.9547L14.6166 10.3839C14.1284 9.89573 14.1284 9.10427 14.6166 8.61612C15.1047 8.12796 15.8962 8.12796 16.3843 8.61612L27.0702 19.302Z"
              fill="white"
            />
          </svg>
        }
      />
    </Header>
  );
};

export default BackHeader;
