import { DataContextProvider } from './DataContext'

export default function GlobalContext({ children }) {
  return <DataContextProvider>{children}</DataContextProvider>
}
