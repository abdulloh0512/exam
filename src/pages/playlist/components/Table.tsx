import styled from "styled-components";

const TableContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
  padding-inline: 10px;
  padding-bottom: 20px;
  border-bottom: 1px solid #666666;
  display: grid;
  align-items: center;
  grid-template-columns: 30px 3fr 2fr 2fr 1fr;
`;

const Col = styled.div`
  padding-left: 10px;
  text-align: left;
  font-size: 2.2rem;
  color: ${({ theme }) => theme.colors.gray};
  text-transform: uppercase;
  line-height: 0;
`;

const Table = () => {
  return (
    <TableContainer>
      <Col># </Col>
      <Col>TITLE</Col>
      <Col>ALBUM</Col>
      <Col>Date</Col>
      <Col>
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20 11C20 15.9706 15.9706 20 11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11ZM22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11ZM11.5 5.5H9.5V12.5H15V10.5H11.5V5.5Z"
            fill="#B3B3B3"
          />
        </svg>
      </Col>
    </TableContainer>
  );
};

export default Table;
