
export  const DateFormater = (data) => {
   return  new Date(data).toLocaleDateString()
}


export  const DateTimeFormater = (data) => {
   return  new Date(data).toLocaleString()
}