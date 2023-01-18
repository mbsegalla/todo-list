import { PlusCircle, Trash } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import Header from '../../components/Header'
import { zodResolver } from '@hookform/resolvers/zod'
import EmptyState from './components/EmptyState'
import { useState } from 'react'
import { toast } from 'react-toastify'
import Checkbox from '../../components/Checkbox'
import {
  Button,
  Form,
  FormContainer,
  Input,
  TaskContainer,
  TaskQtyInfo,
  TasksContainer,
  TaskText,
  Text,
  Qty,
  FormError,
  QtyRounded,
} from './styles'

const createTaskSchema = z.object({
  task: z.string().min(3, { message: 'Mínimo de 3 caracteres' }),
})

type CreateTaskSchema = z.infer<typeof createTaskSchema>

interface Task {
  id: number
  title: string
  completed: boolean
}

const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateTaskSchema>({
    resolver: zodResolver(createTaskSchema),
  })

  const qtyCreated = tasks.length
  const qtyCompleted = tasks.filter((task) => task.completed).length

  const handleCreateTask = (data: CreateTaskSchema) => {
    const newTask = {
      id: Math.random(),
      title: data.task,
      completed: false,
    }

    setTasks([...tasks, newTask])
    toast.success('Tarefa criada com sucesso!')
    reset()
  }

  const handleRemoveTask = (id: number) => {
    const filteredTasks = tasks.filter((task) => task.id !== id)
    setTasks(filteredTasks)
    toast.success('Tarefa removida com sucesso!')
  }

  const handleCompleteTask = (id: number) => {
    const completedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed
      }
      return task
    })
    setTasks(completedTasks)
  }

  return (
    <>
      <Header />
      <FormContainer>
        <Form onSubmit={handleSubmit(handleCreateTask)}>
          <Input
            type="text"
            placeholder="Adicione uma nova tarefa"
            {...register('task')}
          />
          <Button type="submit">
            Criar
            <PlusCircle />
          </Button>
        </Form>
        <FormError>{errors && errors.task?.message}</FormError>
        <TaskContainer>
          <TaskQtyInfo>
            <div>
              <Text colorByText="tasksCreated">Tarefas criadas</Text>
              <QtyRounded>
                <Qty>{qtyCreated}</Qty>
              </QtyRounded>
            </div>
            <div>
              <Text colorByText="tasksCompleted">Concluídas</Text>
              <QtyRounded>
                <Qty>{qtyCompleted}</Qty>
              </QtyRounded>
            </div>
          </TaskQtyInfo>
          {tasks.map((task) => (
            <TasksContainer key={task.id}>
              <div>
                <label>
                  <Checkbox
                    checked={task.completed}
                    onChange={() => handleCompleteTask(task.id)}
                  />
                </label>
                <TaskText completed={task.completed}>{task.title}</TaskText>
              </div>
              <Trash
                color="#808080"
                size={18}
                onClick={() => handleRemoveTask(task.id)}
              />
            </TasksContainer>
          ))}
          {tasks.length <= 0 && <EmptyState />}
        </TaskContainer>
      </FormContainer>
    </>
  )
}

export default Home
