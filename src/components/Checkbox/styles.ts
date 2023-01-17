import styled from 'styled-components'

interface CheckboxProps {
  checked?: boolean
}

export const CheckboxUI = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

export const CheckBoxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

export const CheckboxContent = styled.div<CheckboxProps>`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${(props) => (props.checked ? props.theme.purple : 'none')};
  border: 2px solid ${(props) => (props.checked ? 'none' : props.theme.blue)};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
    color: ${(props) => props.theme.white};
    font-size: 12px;
  }
`
