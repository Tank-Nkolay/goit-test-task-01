import styled from '@emotion/styled';

export const Markup = styled.div`
  margin-top: ${props => props.theme.space[5]};
  padding: ${props => props.theme.space[5]};
  background-color: ${p => p.theme.colors.white};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: ${props => props.theme.space[3]};
`;

export const Title = styled.h2`
  font-size: ${p => p.theme.fontSizes.ll};
`;

export const BoxButton = styled.div`
  margin-top: ${props => props.theme.space[5]};
  margin-bottom: ${props => props.theme.space[5]};
`;

export const Button = styled.button`
  font-size: ${p => p.theme.fontSizes.l};
  border-radius: ${props => props.theme.space[3]};
  background-color: ${p => p.theme.colors.greyLight};

  padding: ${props => props.theme.space[3]};
  margin-right: ${props => props.theme.space[4]};
  &:last-child {
    margin-right: ${props => props.theme.space[0]};
  }
`;

export const TitleStatistics = styled.h3`
  font-size: ${p => p.theme.fontSizes.l};
  margin-bottom: ${props => props.theme.space[5]};
`;

export const BoxInfo = styled.div``;

export const Info = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  margin-bottom: ${props => props.theme.space[3]};
  &:last-child {
    margin-bottom: ${props => props.theme.space[0]};
  }
`;