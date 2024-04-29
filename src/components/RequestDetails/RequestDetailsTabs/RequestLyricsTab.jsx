import React from "react";

export default function RequestLyricsTab({ request }) {
  return (
    <>
      <h2 className='lyricsHeader'>Lyrics:</h2>
      <p>{`${request.lyrics}`}</p>
    </>
  )
}
