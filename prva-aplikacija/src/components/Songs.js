import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchSongs } from '../redux/songs/songs'

const Songs = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSongs())
  }, [dispatch])

  return <div>Songs</div>
}

export default Songs