export function generateRandomId(length = 16): string {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length

  const timestamp = Date.now()

  return Array.from({ length }, (_, i) => {
    const randomIndex =
      (Math.floor(Math.random() * timestamp) + timestamp + i) % charactersLength

    return characters.charAt(randomIndex)
  }).join('')
}
