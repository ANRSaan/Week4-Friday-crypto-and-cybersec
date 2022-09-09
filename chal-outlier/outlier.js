

const outlier = arr => {
    evens = []
    odds = []
  
    for (i = 0; i < arr.length; i++){
      if (evens.length >= 2 && odds.length > 0 && (evens.length > odds.length)){
        return odds[0]
      }
      if (odds.length >= 2 && evens.length > 0 && (evens.length < odds.length)){
        return evens[0]
      }
      if (arr[i] % 2 === 0){
        evens.push(arr[i])
      }
      if (arr[i] % 2 === 1){
        odds.push(arr[i])
      }
    }
}
  
  console.log(outlier([160, 3, 1719, 19, 11, 13, -21]))
  console.log(outlier([2, 4, 0, 100, 4, 11, 2602, 36]))