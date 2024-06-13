import {
  Box,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material'
import { useState } from 'react'
import CardLayout from './CardLayout'
import { useDataContext } from '../context/DataContext'

const intialErrorMessage = 'This field is required'

export default function Step1({ currentStep, setCurrentStep }) {
  const theme = useTheme()
  const { primary, neutral } = theme.palette.colors

  const isSm = useMediaQuery(theme.breakpoints.down('sm'))

  const { step1Data, setStep1Data } = useDataContext()

  const [errors, setErrors] = useState({
    name: { status: false, message: intialErrorMessage },
    email: { status: false, message: intialErrorMessage },
    phone: { status: false, message: intialErrorMessage }
  })

  function handleInputChange(inputName, event) {
    setStep1Data((prev) => ({ ...prev, [inputName]: event.target.value }))
    setErrors((prev) => ({ ...prev, [inputName]: false }))
  }

  function handleNext() {
    const { name, email, phone } = step1Data

    if (name && email && phone) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

      const isEmailValid = emailRegex.test(email)
      const isPhoneValid = phone.length === 10

      if (!isEmailValid && !isPhoneValid) {
        return setErrors((prev) => ({
          ...prev,
          phone: {
            message: 'Phone number should be 10 digits',
            status: true
          },
          email: {
            message: 'Please enter a valid email address',
            status: true
          }
        }))
      }

      if (!isEmailValid) {
        return setErrors((prev) => ({
          ...prev,
          email: {
            message: 'Please enter a valid email address',
            status: true
          }
        }))
      }

      if (!isPhoneValid) {
        return setErrors((prev) => ({
          ...prev,
          phone: {
            message: 'Phone number should be 10 digits',
            status: true
          }
        }))
      }

      setCurrentStep((prev) => prev + 1)
    } else {
      if (!name)
        setErrors((prev) => ({
          ...prev,
          name: { message: intialErrorMessage, status: true }
        }))
      if (!email)
        setErrors((prev) => ({
          ...prev,
          email: { message: intialErrorMessage, status: true }
        }))
      if (!phone)
        setErrors((prev) => ({
          ...prev,
          phone: { message: intialErrorMessage, status: true }
        }))
    }
  }

  return (
    <CardLayout
      currentStep={currentStep}
      title='Personal info'
      subtitle='Please provide your name, email address, and phone number.'
      handleNext={handleNext}
    >
      <Grid container flexDirection='column' gap={isSm ? 2.5 : 3}>
        <Box>
          <Grid container alignItems='center' justifyContent='space-between'>
            <Typography mb={1} color={primary.marineBlue}>
              Name
            </Typography>
            {errors.name.status ? (
              <Typography mb={1} color={primary.strawberryRed} fontWeight={700}>
                {errors.name.message}
              </Typography>
            ) : null}
          </Grid>
          <TextField
            placeholder='e.g. Stephen King'
            fullWidth
            sx={{
              borderColor: errors.name.status
                ? primary.strawberryRed
                : neutral.collGray
            }}
            value={step1Data.name}
            onChange={(event) => handleInputChange('name', event)}
          />
        </Box>
        <Box>
          <Grid container alignItems='center' justifyContent='space-between'>
            <Typography mb={1} color={primary.marineBlue}>
              Email Address
            </Typography>
            {errors.email.status ? (
              <Typography mb={1} color={primary.strawberryRed} fontWeight={700}>
                {errors.email.message}
              </Typography>
            ) : null}
          </Grid>
          <TextField
            placeholder='e.g. stephenking@lorem.com'
            fullWidth
            sx={{
              borderColor: errors.email.status
                ? primary.strawberryRed
                : neutral.collGray
            }}
            value={step1Data.email}
            onChange={(event) => handleInputChange('email', event)}
          />
        </Box>
        <Box>
          <Grid container alignItems='center' justifyContent='space-between'>
            <Typography mb={1} color={primary.marineBlue}>
              Phone Number
            </Typography>
            {errors.phone.status ? (
              <Typography mb={1} color={primary.strawberryRed} fontWeight={700}>
                {errors.phone.message}
              </Typography>
            ) : null}
          </Grid>
          <TextField
            type='number'
            placeholder='e.g. +1 234 567 890'
            onWheel={(event) => {
              event.currentTarget.blur()
            }}
            fullWidth
            sx={{
              borderColor: errors.phone.status
                ? primary.strawberryRed
                : neutral.collGray
            }}
            value={+step1Data.phone || ''}
            onChange={(event) => handleInputChange('phone', event)}
          />
        </Box>
      </Grid>
    </CardLayout>
  )
}
