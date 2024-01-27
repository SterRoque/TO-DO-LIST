import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export const styles = StyleSheet.create({
  textContainer: {
    flexDirection: 'row'
  },
  text: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.blue
  },
  textCount: {
    color: colors['gray-200']
  },

  circle: {
    borderRadius: 50,
    backgroundColor: colors['gray-400'],
    height: 19,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
    marginLeft: 8
  }
})
