import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export const styles = StyleSheet.create({
  taskContainer: {
    backgroundColor: colors['gray-500'],
    borderColor: colors['gray-400'],
    borderWidth: 1,
    width: '100%',
    padding: 12,

    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 8,
    gap: 8
  },
  taskText: {
    fontSize: 14,
    color: colors['gray-100'],
    width: '75%'
  },
  taskCompletedText: {
    textDecorationLine: 'line-through',
    color: colors['gray-300']
  }
})
