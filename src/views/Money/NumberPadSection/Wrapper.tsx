import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;

  .output {
    background: #17181c;
    color: #6ec5bd;
    font-size: 40px;
    line-height: 72px;
    display: flex;
    justify-content: flex-end;
    padding: 0 16px;
  }

  .pad {
    background: #39393b;

    button {
      transition: all 0.2s;
      font-size: 18px;
      color: #e1e1e3;
      border-radius: 4px;
      width: 25%;
      height: 64px;
      border: 1px solid #1f1f21;
      background: #39393b;
      float: left;

      &.ok {
        float: right;
        height: 128px;
        background: linear-gradient(to right, #e1b187, orange);
        color: white;

        &:active {
          background: #c5891a;
        }
      }

      &.zero {
        width: 50%;
      }

      &:first-child, &:nth-child(5), &:nth-child(9), &:nth-child(13) {
        background: #38383a;
      }

      &:nth-child(2), &:nth-child(6), &:nth-child(10), &:nth-child(14) {
        background: #3f3f42;
      }

      &:nth-child(3), &:nth-child(7), &:nth-child(11) {
        background: #444448;
      }

      &:nth-child(4), &:nth-child(8) {
        background: #444448;
      }
    }

    button:active {
      background: #6f6f72;
    }
  }
`;

export default Wrapper