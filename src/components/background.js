import React from 'react'

export default  () => {
  return (
    <div className="background_video">
      <video autoPlay loop muted crossorigin="true" preload="metadata" playsinline="true">
        <source
          type="video/mp4" src="https://hochburg.cdn.prismic.io/hochburg%2Fbac0c4c9-0c31-4bd2-9c6a-ceec154186cd_hoc_website_background_bike_leica_1-compressed.mp4" />
      </video>
    </div>
  )
}