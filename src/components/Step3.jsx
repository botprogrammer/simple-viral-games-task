import { Box, Grid } from '@mui/material'
import CardLayout from './CardLayout'
import { addOns } from '../data'
import AddOnCard from './AddOnCard'
import { useDataContext } from '../context/DataContext'

export default function Step3({ currentStep, setCurrentStep }) {
  const { step2Data, step3Data, setStep3Data } = useDataContext()

  function handleAddOnClick(id) {
    let array = [...step3Data.addOns]
    if (step3Data.addOns.includes(id)) {
      const index = step3Data.addOns.indexOf(id)
      array.splice(index, 1)
    } else {
      array.push(id)
    }
    setStep3Data({ addOns: array })
  }

  return (
    <CardLayout
      title='Pick add-ons'
      subtitle='Add-ons help enhance your gaming experience.'
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
    >
      <Grid container flexDirection='column' gap={2}>
        {addOns.map((item) => {
          return (
            <Box
              key={item.id}
              onClick={() => handleAddOnClick(item.id)}
              sx={{ cursor: 'pointer' }}
            >
              <AddOnCard
                cardItem={item}
                isSelected={step3Data.addOns.includes(item.id)}
                billingType={step2Data.billingType}
              />
            </Box>
          )
        })}
      </Grid>
    </CardLayout>
  )
}
