import { createContext, useContext, useMemo, useState } from 'react'

const DataContext = createContext()

const initialState = {
  step1: { name: '', email: '', phone: '' },
  step2: { plan: '', billingType: 'month' },
  step3: { addOns: [] }
}

export const DataContextProvider = ({ children }) => {
  const [step1Data, setStep1Data] = useState(initialState.step1)
  const [step2Data, setStep2Data] = useState(initialState.step2)
  const [step3Data, setStep3Data] = useState(initialState.step3)

  const contextValues = useMemo(
    () => ({
      initialState,
      step1Data,
      setStep1Data,
      step2Data,
      setStep2Data,
      step3Data,
      setStep3Data
    }),
    [step1Data, step2Data, step3Data]
  )

  return (
    <DataContext.Provider value={contextValues}>
      {children}
    </DataContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useDataContext = () => {
  return useContext(DataContext)
}

export default DataContext
