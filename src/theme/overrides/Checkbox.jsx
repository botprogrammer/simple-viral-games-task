// ==============================|| OVERRIDES - Checkbox ||============================== //

import UncheckedIcon from '../../components/svg/UncheckedIcon'

export default function Checkbox(theme) {
  const { primary } = theme.palette.colors
  return {
    MuiCheckbox: {
      defaultProps: {
        disableRipple: true,
        icon: <UncheckedIcon width={24} strokeColor='lightgrey' />
      },
      styleOverrides: {
        root: {
          '&.Mui-checked': {
            color: primary.purplishBlue
          }
        }
      }
    }
  }
}
