import '@/components/UiCheckbox/UiCheckbox.scss'
import React, { useEffect, useState } from 'react'

interface UiCheckboxProps {
  checked: boolean
  className?: string
  onChange: (checked: boolean) => void
}

export const UiCheckbox: React.FC<UiCheckboxProps> = ({
  checked,
  className = '',
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(checked)

  useEffect(() => {
    setIsChecked(checked)
  }, [checked])

  function handleChange(checked: boolean) {
    setIsChecked(checked)
    onChange(checked)
  }

  return (
    <label className={`ui-checkbox ${className}`}>
      <input
        className="ui-checkbox__input"
        type="checkbox"
        checked={isChecked}
        onChange={(e) => {
          handleChange(e.target.checked)
        }}
      />
    </label>
  )
}
