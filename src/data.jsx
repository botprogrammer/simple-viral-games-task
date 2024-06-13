import AdvancedIcon from './components/svg/AdvancedIcon'
import ArcadeIcon from './components/svg/ArcadeIcon'
import ProIcon from './components/svg/ProIcon'

export const plans = [
  { name: 'Arcade', icon: ArcadeIcon, price: { month: 9, year: 90 } },
  { name: 'Advanced', icon: AdvancedIcon, price: { month: 12, year: 120 } },
  { name: 'Pro', icon: ProIcon, price: { month: 15, year: 150 } }
]

export const addOns = [
  {
    id: 1,
    name: 'Online service',
    service: 'Access to multiplayer games',
    price: { month: 1, year: 10 }
  },
  {
    id: 2,
    name: 'Larger storage',
    service: 'Extra 1TB of cloud save',
    price: { month: 2, year: 20 }
  },
  {
    id: 3,
    name: 'Customizable profile',
    service: 'Custom theme on your profile',
    price: { month: 2, year: 20 }
  }
]
