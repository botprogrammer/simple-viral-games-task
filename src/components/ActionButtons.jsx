import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material'

export default function ActionButtons({
  currentStep,
  setCurrentStep,
  handlePrev,
  handleNext,
  nextTitle = 'Next Step'
}) {
  const theme = useTheme()
  const isSm = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Grid container alignItems='center' justifyContent='space-between'>
      {currentStep === 1 ? (
        <Box />
      ) : (
        <Button
          variant='text'
          sx={{ width: 'max-content', mb: isSm ? 3 : 0 }}
          onClick={
            handlePrev
              ? handlePrev()
              : () => {
                  setCurrentStep((prev) => prev - 1)
                }
          }
        >
          <Typography fontSize={18} fontWeight={500}>
            Go Back
          </Typography>
        </Button>
      )}
      <Button
        variant='contained'
        sx={{ width: 'max-content', mb: isSm ? 3 : 0 }}
        onClick={
          handleNext
            ? () => handleNext()
            : () => {
                setCurrentStep((prev) => prev + 1)
              }
        }
      >
        <Typography fontSize={18} fontWeight={500}>
          {nextTitle}
        </Typography>
      </Button>
    </Grid>
  )
}
