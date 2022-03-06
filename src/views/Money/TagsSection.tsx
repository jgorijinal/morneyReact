import styled from 'styled-components';

const TagsSection = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  background: #17181c;
  padding: 12px 16px;
  ol {margin: 0 -12px;
    li {
      display: inline-block;color: #d3d4d8;
      background: #36363f;font-size: 14px;margin: 8px 12px;
      padding: 3px 18px;border-radius: 18px;cursor: pointer;
    }
  }

  button {display: flex;align-items: center;background: none;
    border: none;color: #d3d4d8;cursor: pointer;margin-top:8px;
    > svg {width: 1.5em;margin-right: 4px;}
    padding: 2px 4px;border-bottom: 1px solid #6d6e73;}
`
export {TagsSection}