import styled from 'styled-components';

const Button = styled.button`
  border: none;
  background: linear-gradient(to right, #e1b187, orange);
  font-size: 16px;
  color: white;
  padding: 6px 16px;
  border-radius: 4px;
  &:active {
    background: #c0973e;
  }
`;
export default Button