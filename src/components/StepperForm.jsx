import { useState } from 'react'
import { Box, Card, Grid, useMediaQuery, useTheme } from '@mui/material'

import Step1 from './Step1'
import StepperComponent from './StepperComponent'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'

import bgDesktop from '../components/svg/bg-sidebar-desktop.svg'
import bgMobile from '../components/svg/bg-sidebar-mobile.svg'

const steps = ['YOUR INFO', 'SELECT PLAN', 'ADD-ONS', 'SUMMARY']

const mobileStyles = {
  p: 0,
  width: '100%',
  height: '100%',
  borderRadius: 0
}
const desktopStyles = {
  p: 2.5,
  width: 1100,
  height: 700
}

export default function CustomizedSteppers() {
  const [currentStep, setCurrentStep] = useState(1)

  const theme = useTheme()

  const isSm = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Card sx={isSm ? mobileStyles : desktopStyles}>
      <Grid container height='100%' flexDirection={isSm ? 'column' : 'row'}>
        <Box
          width={{ xs: '100%', lg: 300 }}
          height={{ xs: 200, lg: '100%' }}
          borderRadius={{ xs: 0, lg: 3 }}
          px={4}
          py={4}
          sx={{
            backgroundImage: {
              xs: `url(${bgMobile})`,
              lg: `url(${bgDesktop})`
            },
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <StepperComponent steps={steps} currentStep={currentStep} />
        </Box>
        {currentStep === 1 ? (
          <Step1 currentStep={currentStep} setCurrentStep={setCurrentStep} />
        ) : null}
        {currentStep === 2 ? (
          <Step2 currentStep={currentStep} setCurrentStep={setCurrentStep} />
        ) : null}
        {currentStep === 3 ? (
          <Step3 currentStep={currentStep} setCurrentStep={setCurrentStep} />
        ) : null}
        {currentStep === 4 ? (
          <Step4 currentStep={currentStep} setCurrentStep={setCurrentStep} />
        ) : null}
      </Grid>
    </Card>
  )
}
