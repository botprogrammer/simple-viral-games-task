import {
  Box,
  Card,
  Grid,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material'
import ActionButtons from './ActionButtons'
import { Fragment } from 'react'

const mobileStyles = {
  mx: 'auto',
  pt: 5,
  px: 1,
  mt: -15,
  borderRadius: 4,
  height: '90vh',
  width: '90vw'
}

const desktopStyles = {
  px: 14,
  pt: 6,
  pb: 3
}

export default function CardLayout({
  title,
  subtitle,
  handleNext = null,
  handlePrev = null,
  nextTitle,
  currentStep,
  setCurrentStep = (_) => null,
  children
}) {
  const theme = useTheme()
  const { neutral } = theme.palette.colors

  const isSm = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Grid
      container
      flexDirection='column'
      justifyContent='space-between'
      flex={1}
      sx={isSm ? mobileStyles : desktopStyles}
      bgcolor={isSm ? 'transparent' : neutral.white}
    >
      {isSm ? (
        <Card sx={{ px: 3, py: 5, borderRadius: 3 }}>
          <CardContent title={title} subtitle={subtitle}>
            {children}
          </CardContent>
        </Card>
      ) : (
        <CardContent title={title} subtitle={subtitle}>
          {children}
        </CardContent>
      )}
      <ActionButtons
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        handleNext={handleNext}
        handlePrev={handlePrev}
        nextTitle={nextTitle}
      />
    </Grid>
  )
}

function CardContent({ title, subtitle, children }) {
  const theme = useTheme()
  const { primary } = theme.palette.colors

  const isSm = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Fragment>
      <Box mb={isSm ? 3 : 6}>
        <Typography
          fontSize={isSm ? 28 : 38}
          fontWeight={900}
          color={primary.marineBlue}
        >
          {title}
        </Typography>
        <Typography
          fontSize={18}
          color={theme.palette.grey['500']}
          mt={1}
          fontWeight={400}
        >
          {subtitle}
        </Typography>
      </Box>
      <Box flex={1}>{children}</Box>
    </Fragment>
  )
}
