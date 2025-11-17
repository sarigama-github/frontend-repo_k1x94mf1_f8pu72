import React from 'react'
import Spline from '@splinetool/react-spline'

const Hero3D = () => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Soft gradient bloom and vignette overlays that don't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-fuchsia-500/20" />
      <div className="pointer-events-none absolute inset-0" style={{
        background: 'radial-gradient(60% 60% at 50% 40%, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 60%)'
      }} />
    </div>
  )
}

export default Hero3D
