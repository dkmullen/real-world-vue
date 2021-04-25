export default value => {
  const date = new Date(value)
  return date.toLocaleString(['en-US'], {
    month: 'short',
    day: '2-digit',
    year: 'numeric'
  })
}
// imported in main.js, can be used globally (see it in eventShow, eventCard)
