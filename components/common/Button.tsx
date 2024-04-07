import { type FC } from 'react'
import { Text, Pressable, StyleSheet } from 'react-native'

interface Props {
  onPress: () => void
  children: string | React.ReactNode
}

const Button: FC<Props> = ({ onPress, children }) => {
  return (
    <Pressable onPress={onPress} style={styles.buttonStyle}>
      <Text style={styles.textStyle}>{children}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  buttonStyle: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
    paddingLeft: 5,
    paddingRight: 5
  },
  textStyle: {
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
})

export { Button }
