// ==============================|| OVERRIDES - Switch ||============================== //

export default function Switch(theme) {
  const { primary, neutral } = theme.palette.colors
  return {
    MuiSwitch: {
      defaultProps: {
        disableRipple: true
      },
      styleOverrides: {
        root: {
          padding: 8,
          '& .MuiSwitch-track': {
            borderRadius: 22 / 2,
            background: primary.mainBlue,
            opacity: 1
          },

          '& .MuiSwitch-thumb': {
            boxShadow: 'none',
            width: 14,
            height: 14,
            margin: 3
          },

          '& .Mui-checked + .MuiSwitch-track': {
            background: `${primary.mainBlue} !important`,
            opacity: '1 !important'
          },

          '& .Mui-checked .MuiSwitch-thumb': {
            background: neutral.white
          }
        }
      }
    }
  }
}
