// ==============================|| OVERRIDES - CArd ||============================== //

export default function Card() {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          padding: 8,
          borderRadius: 18,
          boxShadow: 'rgba(17, 12, 46, 0.1) 0px 48px 100px 0px;'
        }
      }
    }
  }
}
