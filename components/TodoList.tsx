import { type FC } from 'react'
import { FlatList } from 'react-native'
import { Text, View } from '@/components/Themed'
import TodoListItem from './TodoListItem'
import type { TodoProp } from '@/constants/todos'

export interface TodoListProps {
  todos: TodoProp[]
  handleDeleteTodo: (id: number) => void
  handleToggleCompleted: (id: number) => void
  handleEditTodo: (id: number, newText: string) => void
}

const TodoList: FC<TodoListProps> = ({ todos, handleDeleteTodo, handleToggleCompleted, handleEditTodo }) => {
  const sortCompleted = todos.sort((a, b) => {
    if (a.isCompleted && !b.isCompleted) {
      return 1
    } else if (!a.isCompleted && b.isCompleted) {
      return -1
    } else {
      return 0
    }
  })

  return (
      <View>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Todo List</Text>
        <FlatList
          keyExtractor={(item: TodoProp) => `${item.id}`}
          data={sortCompleted}
          renderItem={({ item }) => (
            <TodoListItem todo={item} handleDeleteTodo={handleDeleteTodo} handleToggleCompleted={handleToggleCompleted} handleEditTodo={handleEditTodo} />
          )}
        />
      </View>
  )
}

export default TodoList
