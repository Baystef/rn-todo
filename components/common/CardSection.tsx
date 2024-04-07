import type { FC } from 'react'
import { StyleSheet } from 'react-native'
import { View } from '@/components/Themed'

interface Props {
  children?: React.ReactNode
  style?: Record<string, string | number>
}

const CardSection: FC<Props> = ({ children, style }) => {
  return <View style={[styles.containerStyle, style]}>{children}</View>
}

const styles = StyleSheet.create({
  containerStyle: {
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  }
})

export { CardSection }
