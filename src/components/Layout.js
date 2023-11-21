import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  text-align: center;
  padding: ${props => props.theme.spacing(4)};
  gap: ${props => props.theme.spacing(4)};
  font-weight: 700;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.color};
`;

export const Container = styled.div`
  border: 2px solid ${props => props.theme.colors.backgroundBorder};
  border-radius: ${props => props.theme.radii.sm};
  width: 500px;
  min-height: 700px;
  padding: ${props => props.theme.spacing(4)};
`;

export const Title = styled.h1`
  margin-bottom: ${props => props.theme.spacing(5)};
`;

export const TitleContact = styled.h2`
  margin-bottom: ${props => props.theme.spacing(5)};
`;
