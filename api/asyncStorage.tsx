/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import AsyncStorage from "@react-native-async-storage/async-storage"
import { type TodoProp } from "@/constants/todos"

const ITEMS = Symbol("ITEMS").toString()

export async function getItems(): Promise<TodoProp[]> {
  try {
    const value = await AsyncStorage.getItem(ITEMS)
    if (value !== null) {
      return JSON.parse(value) as TodoProp[]
    } else {
      return []
    }
  } catch (e) {
    // error reading value
    console.error("Error loading items", e)
    return []
  }
}

export async function addItem(item: TodoProp): Promise<null | undefined> {
  try {
    let items = await getItems()
    if (!items) {
      items = []
    }
    items.push(item)
    await AsyncStorage.setItem(ITEMS, JSON.stringify(items))
    // return item
  } catch (e) {
    // error reading value
    console.error("Error adding item to storage", e)
    return null
  }
}

export async function editItem(
  id: number,
  updatedTodo: TodoProp,
): Promise<null | undefined> {
  try {
    const items = await getItems()

    if (!items) {
      return // No items to edit
    }

    const updatedItems = items.map((item) =>
      item.id === id ? updatedTodo : item,
    )

    await AsyncStorage.setItem(ITEMS, JSON.stringify(updatedItems))
  } catch (e) {
    console.error("Error editing item in storage", e)
  }
}

export async function deleteItem(id: number): Promise<null | undefined> {
  try {
    const items = await getItems()

    if (!items) {
      return // No items to delete
    }

    const filteredItems = items.filter((item) => item.id !== id)

    await AsyncStorage.setItem(ITEMS, JSON.stringify(filteredItems))
  } catch (e) {
    console.error("Error deleting item in storage", e)
  }
}
