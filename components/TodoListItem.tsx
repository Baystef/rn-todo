import type { FC } from 'react'
import { StyleSheet } from 'react-native'
import { Text, View } from '@/components/Themed'
import { CardSection } from './common'
import { MaterialIcons } from '@expo/vector-icons'
import CheckBox from 'expo-checkbox'
import type { TodoProp } from '@/constants/todos'
import type { TodoListProps } from './TodoList'

interface TodoListProp extends Omit<TodoListProps, 'todos'> {
  todo: TodoProp
}

const TodoListItem: FC<TodoListProp> = ({ todo, handleDeleteTodo, handleToggleCompleted }) => {
  return (
    <View>
      <CardSection style={styles.cardStyle}>
        <View style={styles.checkAndText}>
          <CheckBox
            value={todo.isCompleted}
            onValueChange={() => {
              if (todo.isCompleted) return
              handleToggleCompleted(todo.id)
            }}
          />
          <Text style={[
            styles.titleStyle,
            todo.isCompleted && { textDecorationLine: 'line-through' }
          ]}>
            {todo.todo}
          </Text>
        </View>
        <View style={styles.actionButtons}>
          {!todo.isCompleted && <MaterialIcons name="edit" size={24} color="blue" />}
          <MaterialIcons onPress={() => { handleDeleteTodo(todo.id) }} name="delete" size={24} color="red" />
        </View>
      </CardSection>
    </View>
  )
}

const styles = StyleSheet.create({
  checkAndText: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  titleStyle: {
    fontSize: 16,
    padding: 5
  },
  cardStyle: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 3,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    justifyContent: 'space-between'
  },
  actionButtons: {
    flexDirection: 'row',
    columnGap: 10
  }
})

export default TodoListItem
