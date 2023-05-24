import React from 'react'

export default function YouTubeEmbed({ 
    url 
}: { 
    url: string 
}) {
  return (
    <div className="youtube">
      <iframe
        src={url}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  )
}