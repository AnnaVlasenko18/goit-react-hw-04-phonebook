import styled from 'styled-components';

export const ContactFilter = styled.input`
  padding: ${p => p.theme.spacing(2)};
  opacity: 0.8;
  border-radius: ${props => props.theme.radii.sm};
  border: 2px solid ${props => props.theme.colors.backgroundBorder};
  color: ${props => props.theme.colors.backgroundBorder};
  margin-bottom: ${props => props.theme.spacing(9)};

  &::placeholder {
    color: ${props => props.theme.colors.backgroundBorder};
    opacity: 0.4;
  }
`;
