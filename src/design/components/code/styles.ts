import styled from "styled-components"

export const Pre = styled.pre`
  position: relative;
  text-align: left;
  margin: 2rem 0;
  padding: 0.5rem;
  overflow-x: auto;
  border-radius: 3px;
  & * {
    font-family: "Courier Prime", Courier, monospace;
  }
  & .token-line {
    line-height: 1.3rem;
    height: 1.3rem;
  }
`

export const LineNo = styled.span`
  display: inline-block;
  width: 1.5rem;
  user-select: none;
  opacity: 0.3;
`

export const CopyCode = styled.button`
  position: absolute;
  right: 0.25em;
  border: 0;
  border-radius: 3px;
  margin: 0.25em 0.5em;
  opacity: 0.3;
  cursor: pointer;
  transition: 0.15s;
  &:hover {
    opacity: 0.5;
  }
`
