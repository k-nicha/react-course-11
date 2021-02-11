import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchImage } from '../redux/imageLogo/imageLogo'
// import Counter from './../Counter'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchImage())
  }, [dispatch])


  const { username } = useSelector((store) => store.loginReducer)
  const { imageUrl, pending, error } = useSelector(store => store.imageLogoReducer)


  return <h1 style={{ textAlign: 'center' }}>
    Welcome {username} to our music store!

    {!error && !pending && <img src={imageUrl} />}
    {/* <Counter />  */}
  </h1>
}

export default Home