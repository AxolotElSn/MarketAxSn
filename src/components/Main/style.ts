import styled from 'styled-components'
import { MOBILE } from '@/consts/mediaQueries'

export const MainWrapper = styled.main({
  padding: '16px 10px',
  marginTop: '76px',
  flexBasis: '0',
  flexGrow: '1',

  [`@media ${MOBILE}`]: {
    marginTop: '82px',
  },
})

export const Welcome = styled.div({
  marginBottom: '12px',
  fontSize: '18px',
  color: '#333',
  textAlign: 'center',

  [`@media ${MOBILE}`]: {
    fontSize: '16px',
  },
})

export const WelcomeWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const AuthButton = styled.button({
  marginTop: '8px',
  padding: '8px 16px',
  fontSize: '14px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',

  '&:hover': {
    backgroundColor: '#0056b3',
  },
})

export const LogoutButton = styled.button({
  marginTop: '8px',
  padding: '6px 14px',
  fontSize: '14px',
  backgroundColor: '#d9534f',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',

  '&:hover': {
    backgroundColor: '#c9302c',
  },
})
