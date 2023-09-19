let num = Math.floor(Math.random() * 15);

if (num === 3 || num === 6 || num === 9 || num === 12){
  console.log('3の倍数です')
}if(num === 5 || num === 10 || num ===15) {
  console.log('5の倍数です')
}if(num === 15) {
  console.log('3と5の倍数です')
}else if(num === 1 || num === 2 || num === 4 || num === 7 || num === 8 || num === 11 || num === 13 || num === 14) {
  console.log(num)
}