import clipborad from '../../../../assets/clipboard.png'
import { Container } from './styles'

export const EmptyState = () => {
  return (
    <Container>
      <img src={clipborad} />
      <p>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </Container>
  )
}

export default EmptyState
