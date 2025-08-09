import styled from 'styled-components';

export const CardContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px 0 rgba(20,18,122,0.06);
  border-left: 4px solid #0E0464;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 4px 16px 0 rgba(20,18,122,0.12);
  }
`;

export const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #0E0464;
`;

export const Badge = styled.span`
  display: inline-block;
  background: ${props => props.color || '#a3a3a3'};
  color: #fff;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 9999px;
  padding: 0.25rem 0.75rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const FilterInput = styled.input`
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  width: 100%;
  margin-bottom: 1rem;
`;

// Ajoutez d'autres composants stylisés selon vos besoins
