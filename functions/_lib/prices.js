const CATALOGUE = {
  'Festive Delight': 299,
  'Sweet & Salty': 399,
  'Dry Fruit Cookies': 429,
  'Sweet Cravings': 499,
  'Classic Rusks': 335,
}

const CUSTOM_COMBO_PRICE = 469

export function computeTotal(items) {
  return items.reduce((sum, item) => {
    const price = item.title.startsWith('CUSTOM COMBO')
      ? CUSTOM_COMBO_PRICE
      : CATALOGUE[item.title]
    if (!price) throw new Error(`Unknown item: ${item.title}`)
    return sum + price * (item.qty || 1)
  }, 0)
}
