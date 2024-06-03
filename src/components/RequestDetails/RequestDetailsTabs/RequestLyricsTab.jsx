import React from "react";

export default function RequestLyricsTab({ request }) {
  return (
    <>
      
      <p className="lyrics-tag">{`${request.lyrics}`}</p>
    </>
  )
}
