import { Grid } from '@mui/material'
import StepperForm from '../components/StepperForm'

export default function Home() {
  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      height='100vh'
      width='100vw'
    >
      <StepperForm />
    </Grid>
  )
}
