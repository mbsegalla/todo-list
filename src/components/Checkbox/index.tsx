import { Check } from 'phosphor-react'
import { CheckBoxContainer, CheckboxContent, CheckboxUI } from './styles'

interface CheckboxProps {
  className?: string
  checked: boolean
  onChange: () => void
}

const Checkbox = ({
  className,
  checked,
  onChange,
  ...props
}: CheckboxProps) => {
  return (
    <CheckBoxContainer className={className}>
      <CheckboxUI checked={checked} onChange={onChange} {...props} />
      <CheckboxContent checked={checked}>
        <Check weight="bold" />
      </CheckboxContent>
    </CheckBoxContainer>
  )
}

export default Checkbox
