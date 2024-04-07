import { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { View } from '@/components/Themed'
import TodoForm from '@/components/TodoForm'
import TodoList from '@/components/TodoList'
import { type TodoProp } from '@/constants/todos'
import { addItem, deleteItem, editItem, getItems } from '@/api/asyncStorage'

export default function TodoScreen (): JSX.Element {
  const [todoText, setTodoText] = useState('')
  const [todos, setTodos] = useState<TodoProp[]>([])

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const items = await getItems()
        setTodos(items)
      } catch (err) {
        console.error('Error fetching items:', err)
      }
    }

    void fetchData()
  }, [])

  const onChange = (value: string): void => {
    setTodoText(value)
  }

  const handleAddTodo = (): void => {
    if (todoText === '') return
    const newTodo = { id: todos.length + 1, todo: todoText.trim(), isCompleted: false }
    setTodos((prevTodos) => {
      return [...prevTodos, newTodo]
    })
    void addItem(newTodo)
    setTodoText('')
  }

  const handleDeleteTodo = (id: number): void => {
    setTodos(todos.filter(todo => todo.id !== id))
    void deleteItem(id)
  }

  const handleToggleCompleted = (id: number): void => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        const updatedTodo = { ...todo, isCompleted: !todo.isCompleted }
        void editItem(id, updatedTodo)
        return updatedTodo
      } else {
        return todo
      }
    }))
  }

  const handleEditTodo = (id: number, newText: string): void => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        const updatedTodo = { ...todo, todo: newText }
        void editItem(id, updatedTodo)
        return updatedTodo
      } else {
        return todo
      }
    }))
  }

  return (
    <View style={styles.container}>
      <TodoForm
        onChangeText={onChange}
        handleAddTodo={handleAddTodo}
        value={todoText}
      />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View>
        <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleToggleCompleted={handleToggleCompleted} handleEditTodo={handleEditTodo} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    gap: 16
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 5,
    height: 1,
    width: '100%'
  }
})
