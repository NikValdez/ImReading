import styled, { css } from 'styled-components';

export const PageWrapper = styled.section`
  &,
  & * {
    box-sizing: border-box;
    display: block;
  }

  hr {
    display: block;
    border: none;
    border-top: 1px solid lightgrey;

    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

  font-family: system-ui;
  font-size: 1rem;
  line-height: 1.5rem;
  max-width: 35em;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1.5rem;
  padding: 1rem 0.75rem;
  border: 1px solid lightgrey;
  border-radius: 4px;
`;

export const CodeWrapper = styled.pre`
  font-family: monospace;
  font-size: 0.875rem;
  line-height: 1.25rem;
  background-color: hsl(210, 4%, 96%);
  overflow: auto;
  padding: 0.75rem;
  margin: 0;
  border-radius: 4px;

  & strong {
    margin-top: 1.5rem;

    &:first-child {
      margin-top: 0;
    }
  }
`;

export const Title = styled.h1`
  font-size: 1rem;
  line-height: 1.25rem;
  margin-top: 0;
`;

export const Label = styled.label`
  margin-top: 1.5rem;
  width: 100%;
`;

export const Input = styled.input`
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 4px;
  font-size: 1rem;
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 400;
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.75rem 0.75rem;

  &:focus,
  &:active {
    box-shadow: rgb(210, 213, 217) 0px 0px 2px 1px,
      rgb(227, 230, 232) 0px 0px 0px 3px;
    border: 1px solid rgb(26, 33, 43);
    outline: none;
  }
`;

export const ErrorMessageStyles = styled.div`
  border: 1px solid rgb(191, 49, 12);
  background: rgb(191, 49, 12);
  padding: 10px;

  &:focus,
  &:active {
    box-shadow: rgb(244, 129, 116) 0px 0px 2px 1px,
      rgb(251, 178, 174) 0px 0px 0px 3px;
    border: 1px solid rgb(191, 49, 12);
    outline: none;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  margin-top: 1.5rem;

  background-color: rgb(24, 81, 187);
  display: block;
  text-align: center;
  font-size: 1rem;
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 700;
  height: 3rem;
  white-space: nowrap;
  color: rgb(232, 243, 255) !important;
  padding: 0.5rem 1rem;

  &:active,
  &:focus,
  &:hover {
    cursor: pointer;
  }

  &:disabled {
    cursor: pointer;
    background-color: rgb(163, 168, 173);
    box-shadow: none;
    color: rgb(255, 255, 255) !important;

    &:hover,
    &:focus {
      cursor: not-allowed;
    }
  }
`;
