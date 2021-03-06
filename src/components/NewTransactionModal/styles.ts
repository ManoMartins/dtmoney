import styled from "styled-components";
import { darken, transparentize } from 'polished';


interface RadioButtonProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    background: #E7E7EE;
    border: 1px solid #D7D7D7;
    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    height: 4rem;
    padding: 0 1.5rem;
    background: var(--green);
    color: #FFF;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;

    transition: filter 200ms;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
`;

const colors = {
  green: '#33CC95',
  red: '#E52E4D',
};

export const RadioButton = styled.button<RadioButtonProps>`
  height: 4rem;
  border: 1px solid #D7D7D7;
  border-radius: 0.25rem;

  background: ${({isActive, activeColor}) => isActive 
    ? transparentize(0.9, colors[activeColor])
    : 'transparent'};

  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 200ms;

  &:hover {
    border-color: ${darken(0.1, '#D7D7D7')}
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }
`;