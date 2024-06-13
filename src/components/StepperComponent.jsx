import {
  Grid,
  Step,
  StepLabel,
  Stepper,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material'
import { Fragment } from 'react'

const mobileStyles = {
  display: 'flex',
  justifyContent: 'center'
}

function QontoStepIcon(props) {
  const { active, icon } = props

  const theme = useTheme()
  const isSm = useMediaQuery(theme.breakpoints.down('sm'))

  const { primary, neutral } = theme.palette.colors

  return (
    <Grid
      container
      alignItems='center'
      justifyContent='center'
      sx={{
        width: { xs: 40, lg: 36 },
        height: { xs: 40, lg: 36 },
        bgcolor: active ? '#BEE2FA' : 'transparent',
        borderRadius: '50%',
        pt: isSm ? 0 : '3px',
        border: `1px solid ${active ? '#BEE2FA' : '#fff'}`
      }}
    >
      <Typography
        variant={isSm ? 'subtitle1' : 'subtitle2'}
        fontWeight={700}
        color={active ? primary.marineBlue : neutral.magnolia}
      >
        {icon}
      </Typography>
    </Grid>
  )
}

export default function StepperComponent({ steps, currentStep }) {
  const theme = useTheme()

  const isSm = useMediaQuery(theme.breakpoints.down('sm'))
  const { primary } = theme.palette.colors

  return (
    <Stepper
      activeStep={currentStep - 1}
      orientation={isSm ? 'horizontal' : 'vertical'}
      connector={null}
      sx={isSm ? mobileStyles : {}}
    >
      {steps.map((label, index) => (
        <Step key={label}>
          <StepLabel StepIconComponent={QontoStepIcon} sx={{ my: 1 }}>
            {isSm ? null : (
              <Fragment>
                <Typography
                  variant='subtitle2'
                  color={primary.pastelBlue}
                  pl={1.5}
                  letterSpacing={1.2}
                >
                  STEP {index + 1}
                </Typography>
                <Typography
                  color='#fff'
                  fontWeight={900}
                  pl={1.5}
                  letterSpacing={1.5}
                >
                  {label}
                </Typography>
              </Fragment>
            )}
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  )
}
