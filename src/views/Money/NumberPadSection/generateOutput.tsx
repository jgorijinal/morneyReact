const generateOutput= ( text:string , output="0" )=>{
switch (text) {
  case '0' :
  case '1' :
  case '2' :
  case '3' :
  case '4' :
  case '5' :
  case '6' :
  case '7' :
  case '8' :
  case '9' :
    if(output === '0'){
      return text
    }else {
      return output + text
    }
  case '.' :
    if(output.indexOf('.') >= 0){
      return output
    }else{
      console.log('xxxxxxxxxx')
     return output + text
    }
  case 'del' :
    if(output.length === 1){
      return '0'
    }else {
      return output.substring(0,output.length - 1) || ''
    }
  case 'C' :
    return '0'
  default:
    return ''
}
}
export  default  generateOutput