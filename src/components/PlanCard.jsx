/* eslint-disable react/prop-types */
import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import { useDataContext } from '../context/DataContext'

export default function PlanCard({ item, billingType }) {
  const { icon: Icon } = item

  const theme = useTheme()
  const {
    colors: { primary, neutral }
  } = theme.palette

  const isSm = useMediaQuery(theme.breakpoints.down('sm'))

  const { step2Data } = useDataContext()

  const isSelected = item.name === step2Data.plan

  return (
    <Grid
      container
      flexDirection={isSm ? 'row' : 'column'}
      px={2.25}
      pt={isSm ? 1.75 : 3}
      pb={1.75}
      border='1px solid'
      borderColor={isSelected ? primary.purplishBlue : neutral.lightGray}
      borderRadius={3}
      sx={{
        '&:hover': {
          borderColor: primary.purplishBlue
        }
      }}
      gap={isSm ? 2 : 0}
      alignItems={isSm ? 'start' : 'unset'}
    >
      <Box mt={{ xs: 1 }}>
        <Icon width={isSm ? 46 : 40} />
      </Box>
      <Box>
        <Typography
          variant='h6'
          color={primary.mainBlue}
          fontWeight={600}
          mt={isSm ? 0 : 7}
        >
          {item.name}
        </Typography>
        <Typography
          color={neutral.coolGray}
          variant='body1'
          fontWeight={400}
          mb={0.5}
        >
          ${item.price[billingType]}/{billingType === 'month' ? 'mo' : 'yr'}
        </Typography>
        {step2Data.billingType === 'year' ? (
          <Typography variant='body2' color={primary.marineBlue}>
            2 months free
          </Typography>
        ) : null}
      </Box>
    </Grid>
  )
}
