import styled from "styled-components";
import Action from "./Act";

const ActList = styled.ul`
  gap: 20px;
  display: grid;
  width: 100%;
`;

const ActionsList = () => {
  return (
    <ActList>
      <Action
        icon={
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 0C0.895431 0 0 0.895431 0 2V30C0 31.1046 0.895431 32 2 32H30C31.1046 32 32 31.1046 32 30V2C32 0.895431 31.1046 0 30 0H2ZM15 9H17V15H23V17H17V23H15V17H9V15H15V9Z"
              fill="white"
            />
          </svg>
        }
        text="Create Playlist"
        url="/"
      />
      <Action
        icon={
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="32"
              height="32"
              rx="2"
              fill="url(#paint0_linear_124_3039)"
            />
            <path
              d="M16.0006 10.158C17.6448 8.56071 20.1858 8.61373 21.7699 10.3307C23.3532 12.0484 23.4078 14.784 21.9351 16.5684L15.9992 23L10.0647 16.5684C8.59191 14.784 8.64721 12.0439 10.2299 10.3307C11.8154 8.616 14.3514 8.55844 16.0006 10.158Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_124_3039"
                x1="1"
                y1="1"
                x2="32"
                y2="30.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3822EA" />
                <stop offset="1" stopColor="#C7E9D7" />
              </linearGradient>
            </defs>
          </svg>
        }
        text="Liked Songs"
        url="/liked"
      />
    </ActList>
  );
};

export default ActionsList;
