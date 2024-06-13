import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import CardLayout from './CardLayout'
import { useDataContext } from '../context/DataContext'
import { addOns, plans } from '../data'
import { useState } from 'react'
import ThankyouIcon from './svg/ThankyouIcon'

const mobileStyles = {
  width: '90vw',
  mt: -10,
  mx: 'auto',
  pb: 0,
  borderRadius: 3,
  background: 'white',
  boxShadow: 'rgba(17, 12, 46, 0.1) 0px 48px 100px 0px;'
}

export default function Step4({ currentStep, setCurrentStep }) {
  const [hasSubmitted, setHasSubmitted] = useState(false)

  const { step2Data, step3Data } = useDataContext()

  const theme = useTheme()
  const { neutral, primary } = theme.palette.colors

  const isSm = useMediaQuery(theme.breakpoints.down('sm'))

  const currentBillingType = step2Data.billingType
  const currentPlan = plans.find((item) => item.name === step2Data.plan)
  const currentAddons = addOns.filter((item) =>
    step3Data.addOns.includes(item.id)
  )

  const isMonthly = currentBillingType === 'month'

  const total =
    currentPlan.price[currentBillingType] +
    currentAddons.reduce((current, next) => {
      return current + next.price[currentBillingType]
    }, 0)

  function handleSubmit() {
    setHasSubmitted(true)
  }

  return hasSubmitted ? (
    <Grid
      flex={1}
      container
      alignItems='center'
      justifyContent={'center'}
      maxHeight={isSm ? '50vh' : 'unset'}
      flexDirection='column'
      px={isSm ? 3 : 12}
      sx={isSm ? mobileStyles : {}}
    >
      <ThankyouIcon width={isSm ? 80 : 100} />
      <Typography
        variant={isSm ? 'h4' : 'h3'}
        color={primary.marineBlue}
        fontWeight={700}
        mt={5}
        mb={3}
      >
        Thank you!
      </Typography>
      <Typography
        variant='h6'
        fontSize={isSm ? 18 : null}
        color={neutral.coolGray}
        fontWeight={isSm ? 400 : 500}
        textAlign='center'
      >
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support please feel free to email us at
        support@loremgaming.com.
      </Typography>
    </Grid>
  ) : (
    <CardLayout
      title='Finishing up'
      subtitle='Double-check everything looks OK before confirming.'
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
      nextTitle='Confirm'
      handleNext={handleSubmit}
    >
      <Box bgcolor={neutral.magnolia} py={2} px={isSm ? 2 : 3} borderRadius={2}>
        <Grid
          container
          justifyContent='space-between'
          alignItems='center'
          borderBottom={`1px solid ${neutral.lightGray}`}
          pb={3}
        >
          <Box>
            <Typography
              fontWeight={500}
              variant={isSm ? 'body1' : 'h6'}
              color={primary.marineBlue}
              mb={0.5}
            >
              {step2Data.plan} ({isMonthly ? 'Monthly' : 'Yearly'})
            </Typography>
            <Typography
              color={neutral.coolGray}
              borderBottom='2px solid'
              borderColor={neutral.coolGray}
              width='max-content'
              lineHeight={1}
              sx={{
                cursor: 'pointer',
                '&:hover': {
                  color: primary.purplishBlue,
                  borderColor: primary.purplishBlue
                }
              }}
              onClick={() => setCurrentStep(2)}
            >
              Change
            </Typography>
          </Box>
          <Box>
            <Typography
              variant={isSm ? 'body1' : 'h6'}
              color={primary.marineBlue}
              fontWeight={600}
            >
              ${currentPlan.price[currentBillingType]}/{isMonthly ? 'mo' : 'yr'}
            </Typography>
          </Box>
        </Grid>

        {currentAddons.map((item) => {
          return (
            <Grid
              key={item.id}
              container
              justifyContent='space-between'
              alignItems='center'
              pt={2}
            >
              <Typography color={neutral.coolGray}>{item.name}</Typography>
              <Typography>
                +${item.price[currentBillingType]}/{isMonthly ? 'mo' : 'yr'}
              </Typography>
            </Grid>
          )
        })}
      </Box>
      <Grid
        container
        justifyContent='space-between'
        alignItems='center'
        pt={3}
        pb={isSm ? 0 : 3}
        px={isSm ? 2 : 3}
      >
        <Typography color={neutral.coolGray}>
          Total (per {currentBillingType})
        </Typography>
        <Typography
          variant={isSm ? 'h6' : 'h5'}
          fontWeight={700}
          color={primary.purplishBlue}
        >
          +${total}/{isMonthly ? 'mo' : 'yr'}
        </Typography>
      </Grid>
    </CardLayout>
  )
}
