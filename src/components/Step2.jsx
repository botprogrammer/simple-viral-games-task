import { useState } from 'react'
import {
  Box,
  Grid,
  Switch,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material'
import { plans } from '../data'
import CardLayout from './CardLayout'
import PlanCard from './PlanCard'
import { useDataContext } from '../context/DataContext'

export default function Step2({ currentStep, setCurrentStep }) {
  const [error, setError] = useState(false)

  const { step2Data, setStep2Data } = useDataContext()

  const theme = useTheme()
  const { neutral, primary } = theme.palette.colors
  const isSm = useMediaQuery(theme.breakpoints.down('sm'))

  function handleSubmit() {
    if (step2Data.plan) {
      setCurrentStep((prev) => prev + 1)
    } else {
      setError(true)
    }
  }
  const isMonthly = step2Data.billingType === 'month'

  return (
    <CardLayout
      title='Select your plan'
      subtitle='You have the option of monthly or yearly billing.'
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
      handleNext={handleSubmit}
    >
      <Grid
        container
        gap={isSm ? 2 : 3}
        position='relative'
        flexDirection={isSm ? 'column' : 'row'}
      >
        {error ? (
          <Typography
            mb={1}
            color={primary.strawberryRed}
            fontWeight={700}
            position='absolute'
            top={-32}
            right={0}
          >
            Select a plan to proceed
          </Typography>
        ) : null}
        {plans.map((item) => {
          return (
            <Box
              key={item.name}
              flex={1}
              onClick={() => {
                setStep2Data((prev) => ({ ...prev, plan: item.name }))
                setError(false)
              }}
              sx={{ cursor: 'pointer' }}
            >
              <PlanCard item={item} billingType={step2Data.billingType} />
            </Box>
          )
        })}
      </Grid>

      <Grid
        container
        justifyContent='center'
        alignItems='center'
        first
        gap={1.5}
        bgcolor={neutral.alabaster}
        mt={4}
        py={1}
      >
        <Typography
          fontWeight={700}
          color={isMonthly ? primary.marineBlue : neutral.coolGray}
        >
          Monthly
        </Typography>
        <Switch
          checked={!isMonthly}
          onChange={(_, checked) =>
            setStep2Data((prev) => ({
              ...prev,
              billingType: checked ? 'year' : 'month'
            }))
          }
        />
        <Typography
          fontWeight={700}
          color={isMonthly ? neutral.coolGray : primary.marineBlue}
        >
          Yearly
        </Typography>
      </Grid>
    </CardLayout>
  )
}
