export interface TodoProp {
  id: number
  isCompleted: boolean
  todo: string
}

export const todos: TodoProp[] = [
  {
    id: 1,
    isCompleted: false,
    todo: "Buy groceries",
  },
]
