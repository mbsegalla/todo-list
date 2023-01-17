import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 50px;

  img {
    margin-bottom: 16px;
  }

  p {
    color: ${(props) => props.theme['gray-300']};

    &:nth-child(2) {
      font-weight: bold;
    }
  }
`
