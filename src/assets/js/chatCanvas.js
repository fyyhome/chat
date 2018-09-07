export default function (canvasNode, progressTime) {
  let c = canvasNode
  let waveWidth = c.width + c.width / 4
  let offset = 0
  let waveHeight = 8
  let waveCount = 5 // 波浪数影响绘图
  let startX = -c.width / 4
  let startY = c.height + 5
  let progress = c.height + 10
  let progressStep = c.height / (180 * 60)
  progressTime.time = progress / (progressStep * 60)
  // progressTime.step = progressStep
  let d2 = waveWidth / waveCount
  let d = d2 / 2
  let hd = d / 2
  let ctx = c.getContext('2d')
  console.log(c.height + '  ' + c.width)

  function tick () {
    offset -= 2
    progress -= progressStep
    progressTime.time = progress / (progressStep * 60)
    if (progress < 0) return
    if (-1 * offset >= d2) offset = 0
    ctx.fillStyle = '#ffecec'
    ctx.fillRect(0, 0, c.width, c.height)
    let textX = 0
    let textY = c.height / 6
    /** draw count */
    ctx.font = '20px Georgia'
    ctx.fillStyle = '#ccb8ba'
    for (let startCount = 180, i = 0; startCount > 0; i++) {
      if (i < 3) {
        textX = c.width / 2 - (30 / devicePixelRatio)
      } else {
        textX = c.width / 2 - (20 / devicePixelRatio)
      }
      ctx.fillText(startCount + '', textX, textY * i + 15)
      startCount -= 30
    }
    ctx.beginPath()
    ctx.arc(c.width / 2, c.height - 5, 5, 0, 2 * Math.PI)
    ctx.fillStyle = '#ff3636'
    ctx.fill()

    /** draw wave */
    ctx.beginPath()
    let offsetY = startY - progress
    ctx.moveTo(startX - offset, offsetY)
    for (let i = 0; i < waveCount; i++) {
      let dx = i * d2
      let offsetX = dx + startX - offset
      ctx.quadraticCurveTo(offsetX + hd, offsetY + waveHeight, offsetX + d, offsetY)
      ctx.quadraticCurveTo(offsetX + hd + d, offsetY - waveHeight, offsetX + d2, offsetY)
    }
    ctx.lineTo(startX + waveWidth, c.height)
    ctx.lineTo(startX, c.height)
    ctx.fillStyle = '#94cdf0'
    ctx.fill()
    requestAnimationFrame(tick)
  }
  tick()
}
