import styled from 'styled-components';

const NotesSection = styled.section`
  border-bottom: 1px solid #26272b;
  label {
    display: flex;padding: 0 16px;align-items: center;
    color:#d3d4d8;background:  #17181c ;
    span {display: flex;align-items: center;white-space: nowrap;
      margin-right:12px ;
      >svg {width: 1.3em;margin-right:4px ;
      }
    }
    input {display: block;width: 100%;height: 72px;
      background: none;border: none;color:#d3d4d8;
    }
  }
`
export {NotesSection}