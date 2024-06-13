import merge from 'lodash.merge'

import Button from './Button'
import Card from './Card'
import Switch from './Switch'
import TextField from './TextField'
import Checkbox from './Checkbox'

// ==============================|| OVERRIDES - COmponents ||============================== //

export default function ComponentsOverrides(theme) {
  return merge(
    Button(theme),
    Card(theme),
    TextField(theme),
    Switch(theme),
    Checkbox(theme)
  )
}
