import React from 'react'
import ContentLoader from "react-content-loader"

const LoadingBlock = () => {
  return (
      <ContentLoader 
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      
    >
      <circle cx="112" cy="113" r="107" /> 
      <rect x="2" y="238" rx="8" ry="8" width="230" height="23" /> 
      <rect x="3" y="276" rx="8" ry="8" width="229" height="83" /> 
      <rect x="9" y="377" rx="0" ry="0" width="88" height="21" /> 
      <rect x="127" y="371" rx="26" ry="26" width="105" height="30" /> 
      <rect x="146" y="380" rx="0" ry="0" width="4" height="2" />
    </ContentLoader>
    
  )
}

export default LoadingBlock