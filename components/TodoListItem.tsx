import { useState, type FC } from "react"
import { StyleSheet } from "react-native"
import { Text, View } from "@/components/Themed"
import { AppModal, CardSection } from "./common"
import { MaterialIcons } from "@expo/vector-icons"
import CheckBox from "expo-checkbox"
import type { TodoProp } from "@/constants/todos"
import type { TodoListProps } from "./TodoList"
import TodoForm from "./TodoForm"

interface TodoListProp extends Omit<TodoListProps, "todos"> {
  todo: TodoProp
}

const TodoListItem: FC<TodoListProp> = ({
  todo,
  handleDeleteTodo,
  handleToggleCompleted,
  handleEditTodo,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [todoEditText, setTodoEditText] = useState(todo.todo)

  const onChange = (text: string) => {
    setTodoEditText(text)
  }

  const onEditTodoPress = () => {
    setIsModalVisible(true)
  }

  const onModalClose = () => {
    setIsModalVisible(false)
  }

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
          <Text
            style={[
              styles.titleStyle,
              todo.isCompleted && { textDecorationLine: "line-through" },
            ]}
          >
            {todo.todo}
          </Text>
        </View>
        <View style={styles.actionButtons}>
          {!todo.isCompleted && (
            <MaterialIcons
              onPress={onEditTodoPress}
              name="edit"
              size={24}
              color="blue"
            />
          )}
          <MaterialIcons
            onPress={() => {
              handleDeleteTodo(todo.id)
            }}
            name="delete"
            size={24}
            color="red"
          />
        </View>
        <AppModal isVisible={isModalVisible} onClose={onModalClose}>
          <View style={styles.modalContent}>
            <TodoForm
              label="Edit What Todo?"
              value={todoEditText}
              onChangeText={onChange}
              handleOnPress={() => {
                handleEditTodo(todo.id, todoEditText)
                onModalClose()
              }}
            />
          </View>
        </AppModal>
      </CardSection>
    </View>
  )
}

const styles = StyleSheet.create({
  checkAndText: {
    flexDirection: "row",
    alignItems: "center",
  },
  titleStyle: {
    fontSize: 16,
    padding: 5,
  },
  cardStyle: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 3,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    justifyContent: "space-between",
  },
  actionButtons: {
    flexDirection: "row",
    columnGap: 10,
  },
  modalContent: {
    padding: 18,
  }
})

export default TodoListItem
