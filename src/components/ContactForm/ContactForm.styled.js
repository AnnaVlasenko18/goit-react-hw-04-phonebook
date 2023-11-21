import styled from 'styled-components';
import { ErrorMessage, Field, Form } from 'formik';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const FormContact = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.spacing(3)};
  margin-bottom: ${p => p.theme.spacing(20)};
`;

export const FormLabel = styled.label`
  font-size: ${props => props.theme.fontSize.fs20};
`;

export const ErrMsg = styled(ErrorMessage)`
  color: ${props => props.theme.colors.background};
  background-color: ${props => props.theme.colors.color};
  opacity: 0.8;
  font-size: ${props => props.theme.fontSize.fs20};
  padding: ${p => p.theme.spacing(1)};
  width: auto;
  border-radius: ${props => props.theme.radii.md};
`;

export const InputForm = styled(Field)`
  width: 300px;
  padding: ${p => p.theme.spacing(2)};
  opacity: 0.8;
  border-radius: ${props => props.theme.radii.sm};
  border: 2px solid ${props => props.theme.colors.backgroundBorder};
  color: ${props => props.theme.colors.backgroundBorder};

  &::placeholder {
    color: ${props => props.theme.colors.backgroundInput};
    opacity: 0.8;
  }
`;

export const AddContact = styled.button`
  padding: ${p => p.theme.spacing(2)};
  margin-top: ${p => p.theme.spacing(4)};
  font: inherit;
  border-radius: ${props => props.theme.radii.sm};
  border: 2px solid ${props => props.theme.colors.backgroundBorder};
  color: ${props => props.theme.colors.backgroundBorder};

  &:hover {
    border-radius: ${props => props.theme.radii.sm};
    background: ${props => props.theme.colors.backgroundBorder};
    color: ${props => props.theme.colors.background};
  }
`;
