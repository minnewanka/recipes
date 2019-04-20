import { useState } from 'react'

export const useItems = (initialValue = []) => {
  const [items, setItem] = useState(initialValue)
  return {
    items,
    addItem: text => {
      if (text !== '') {
        setItem(
          items.concat({
            text,
            checked: false
          })
        )
      }
    },
    removeItem(id) {
      setItem(items.filter((Item, index) => id !== index))
    }
  }
}
