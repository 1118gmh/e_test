let i = 0
function timeCount () {
  postMessage(i)
  i = i + 1
  setTimeout(timeCount, 1000)
}
timeCount()
