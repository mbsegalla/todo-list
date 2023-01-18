import styled from 'styled-components'

interface ITaskProps {
  colorByText?: string
  completed?: boolean
}

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 68px;
`

export const Form = styled.form`
  position: absolute;
  left: calc(50% - 736px / 2 + 17px);
  top: 172px;
  flex-direction: row;
  display: flex;

  @media (max-width: 752px) {
    width: 100%;
    left: 0;
    padding: 0 16px;
  }
`

export const Input = styled.input`
  background-color: ${(props) => props.theme['gray-500']};
  width: 638px;
  height: 54px;
  padding: 16px;
  border: 1px solid #0d0d0d;
  border-radius: 8px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  color: ${(props) => props.theme['gray-300']};
  margin-right: 8px;

  &:focus {
    outline: none;
  }
`

export const Button = styled.button`
  background-color: ${(props) => props.theme['blue-dark']};
  color: ${(props) => props.theme['gray-100']};
  font-size: 0.875rem;
  padding: 16px;
  border: 0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    margin-left: 2px;
    font-size: 1rem;
  }
`

export const TaskContainer = styled.div`
  width: 720px;
  position: absolute;
  left: calc(50% - 730px / 2 + 17px);
  top: 300px;

  @media (max-width: 752px) {
    width: 100%;
    left: 0;
    padding: 0 16px;
  }
`

export const TaskQtyInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`

export const TasksContainer = styled.div`
  background-color: ${(props) => props.theme['gray-500']};
  padding: 16px;
  border: 1px solid ${(props) => props.theme['gray-400']};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin: 12px 0;

  & > div {
    display: flex;
    align-items: center;
  }

  &:nth-child(2) {
    margin-top: 0;
  }

  svg {
    cursor: pointer;
  }
`

export const Qty = styled.span`
  color: ${(props) => props.theme['gray-200']};
  font-weight: 700;
  font-size: 0.75rem;
`

export const Text = styled.span<ITaskProps>`
  font-weight: 700;
  margin-right: 8px;
  color: ${(props) =>
    props.colorByText === 'tasksCreated'
      ? props.theme.blue
      : props.theme.purple};
`

export const TaskText = styled.span<ITaskProps>`
  color: ${(props) =>
    props.completed === true
      ? props.theme['gray-300']
      : props.theme['gray-100']};
  text-decoration: ${(props) =>
    props.completed === true ? 'line-through' : ''};
  font-size: 0.875rem;
  margin-left: 15px;
`

export const FormError = styled.span`
  color: ${(props) => props.theme.danger};
`
