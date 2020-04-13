export const calculateAge = (date: Date): number => {
  const today = new Date()
  let age = today.getFullYear() - date.getFullYear()
  var months = today.getMonth() - date.getMonth()
  if (months < 0 || (months === 0 && today.getDate() < date.getDate())) {
    age--
  }
  return age
}
