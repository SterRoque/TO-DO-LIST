import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors['gray-600'],
    flex: 1,
    alignItems: 'center',
    position: 'relative'
  },
  header: {
    backgroundColor: colors['gray-700'],
    width: '100%',
    height: 175,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
    top: 142,
    zIndex: 2
  },

  buttonAdd: {
    backgroundColor: colors['blue-dark'],
    width: 52,
    height: 52,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  countContainer: {
    marginTop: 56,
    width: 380,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  clipContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    paddingVertical: 48,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: colors['gray-300'],
    marginTop: 20,
    width: 380
  },
  clipText: {
    color: colors['gray-300'],
    fontSize: 14
  }
})
