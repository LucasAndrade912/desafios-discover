import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        width: '100%',
        height: '100%'
      },
      'body': {
        backgroundColor: '#E5E5E5',
        fontFamily: 'Roboto',
        fontWeight: 700
      }
    }
  }
})

export default theme