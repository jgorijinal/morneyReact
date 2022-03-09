let id = parseInt(window.localStorage.getItem('id') || '0')
const createId = ()=>{
  id += 1
  window.localStorage.setItem('id' , id.toString())
  return id
}
export default  createId