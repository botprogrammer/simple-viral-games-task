import {
  Box,
  Checkbox,
  Grid,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material'

export default function AddOnCard({ cardItem, billingType, isSelected }) {
  const theme = useTheme()

  const {
    colors: { primary, neutral }
  } = theme.palette

  const isSm = useMediaQuery(theme.breakpoints.down('sm'))

  const isMonthly = billingType === 'month'

  return (
    <Grid
      container
      alignItems='center'
      border='1px solid'
      borderColor={isSelected ? primary.purplishBlue : neutral.lightGray}
      borderRadius={2.5}
      gap={isSm ? 1 : 2}
      p={2}
      pr={isSm ? 2 : 3}
      pl={isSm ? 0 : 2}
      sx={{ background: isSelected ? neutral.magnolia : 'transparent' }}
    >
      <Checkbox checked={isSelected} />
      <Box flex={1}>
        <Typography
          variant={isSm ? 'body1' : 'h6'}
          color={primary.marineBlue}
          fontWeight={600}
        >
          {cardItem.name}
        </Typography>
        <Typography color={neutral.coolGray} variant={isSm ? 'body2' : 'body1'}>
          {cardItem.service}
        </Typography>
      </Box>
      <Typography
        variant={isSm ? 'subtitle2' : 'subtitle1'}
        color={primary.purplishBlue}
      >{`+$${cardItem.price[billingType]}/${
        isMonthly ? 'mo' : 'yr'
      }`}</Typography>
    </Grid>
  )
}
