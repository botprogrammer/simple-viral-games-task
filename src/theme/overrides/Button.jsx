// ==============================|| OVERRIDES - BUTTON ||============================== //

import { useMediaQuery } from '@mui/material'

export default function Button(theme) {
  const {
    colors: { primary, neutral }
  } = theme.palette

  const isSm = useMediaQuery(theme.breakpoints.down('sm'))

  return {
    MuiButton: {
      defaultProps: {
        disableRipple: true
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          boxShadow: 'none',
          padding: isSm ? '0.75rem 1.5rem' : '1rem 2rem',
          fontSize: '1rem',
          '&:hover': {
            boxShadow: 'none',
            cursor: 'pointer'
          }
        },
        contained: {
          backgroundColor: primary.mainBlue,
          borderRadius: isSm ? 6 : 12,
          '&:hover': {
            backgroundColor: '#174a8c'
          }
        },
        text: {
          padding: 0,
          color: neutral.coolGray,
          '&:hover': {
            color: primary.mainBlue,
            backgroundColor: 'transparent'
          }
        }
      }
    }
  }
}
