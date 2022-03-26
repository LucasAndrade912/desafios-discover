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
      },
      '#root': {
        height: '100%'
      }
    }
  },
  breakpoints: {
    md: '900px',
    lg: '960px',
  }
})

export default theme