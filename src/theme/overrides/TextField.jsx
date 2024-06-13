// ==============================|| OVERRIDES - TextField ||============================== //

export default function TextField(theme) {
  const { primary } = theme.palette.colors
  return {
    MuiTextField: {
      defaultProps: {},
      styleOverrides: {
        root: {
          border: '1px solid #e1e1e1',
          borderRadius: 10,
          padding: '0.25rem 0.5rem',

          '&:hover': {
            border: `1px solid ${primary.purplishBlue}`
          },

          '& input': {
            fontWeight: 600,
            color: '#2E445B',
            fontSize: '1.1rem',
            padding: '0.75rem 0.5rem'
          },

          '& fieldset': {
            border: 'none !important'
          }
        }
      }
    }
  }
}
