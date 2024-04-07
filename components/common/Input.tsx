import { type FC } from 'react'
import { TextInput, StyleSheet } from 'react-native'
import { Text, View } from '@/components/Themed'

interface Props {
  label: string
  value: string
  onChangeText: (text: string) => void
  placeholder?: string
  secureTextEntry?: boolean
  multiline?: boolean
}

const Input: FC<Props> = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  multiline = false
}) => {
  const { inputStyle, labelStyle, containerStyle } = styles

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <View>
        <TextInput
          placeholder={placeholder}
          autoCorrect={false}
          secureTextEntry={secureTextEntry}
          multiline={multiline}
          style={inputStyle}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    height: 80,
    flex: 1
  },
  inputStyle: {
    color: '#000',
    paddingLeft: 5,
    fontSize: 16,
    height: 40,
    flex: 1,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#ddd'
  },
  labelStyle: {
    fontSize: 16,
    flex: 1
  }
})

export { Input }
