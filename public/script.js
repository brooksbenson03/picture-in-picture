const video = document.getElementById('video')
const button = document.getElementById('button')

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia()
    video.srcObject = mediaStream
    video.onloadedmetadata = () => {
      video.play()
    }
  } catch (e) {
    console.log('select media stream error', e)
  }
}

button.addEventListener('click', async function() {
  button.disabled = true
  await video.requestPictureInPicture()
  button.disabled = false
})

selectMediaStream()