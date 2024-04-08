import type { FC } from "react"
import { StyleSheet, TextInput } from "react-native"
import { Text, View } from "@/components/Themed"
import { Button, CardSection } from "./common"

interface Props {
  onChangeText: (value: string) => void
  handleOnPress: () => void
  value: string
  label?: string
}

const TodoForm: FC<Props> = ({
  onChangeText,
  handleOnPress,
  value,
  label = "What Todo?",
}): JSX.Element => {
  return (
    <CardSection>
      <View style={styles.containerStyle}>
        <Text style={styles.labelStyle}>{label}</Text>
        <View style={styles.inputContainerStyle}>
          <TextInput
            placeholder="Buy Banana"
            autoCorrect={true}
            style={styles.inputStyle}
            value={value}
            onChangeText={onChangeText}
          />
          <Button onPress={handleOnPress}>Add</Button>
        </View>
      </View>
    </CardSection>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    height: 80,
    flex: 1,
  },
  inputContainerStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 40,
    flex: 1,
  },
  inputStyle: {
    color: "#000",
    paddingLeft: 5,
    fontSize: 16,
    height: 40,
    flex: 1,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "#ddd",
  },
  labelStyle: {
    fontSize: 16,
    flex: 1,
  }
})

export default TodoForm
