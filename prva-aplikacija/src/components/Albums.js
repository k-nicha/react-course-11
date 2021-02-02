import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Table, Button } from 'react-bootstrap'
import AddNewAlbum from './AddNewAlbum.js'

const Albums = () => {
  const [isModalShown, showModal] = useState(false)
  const { albums } = useSelector(state => state.albumsReducer)

  const toggleModal = () => {
    showModal(!isModalShown)
  }

  return (<>
    <Button onClick={toggleModal}>
      Add new album
    </Button>
    <AddNewAlbum show={isModalShown} handleClose={toggleModal} />
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Year</th>
          <th>Artist</th>
          <th>Cover Photo</th>
        </tr>
      </thead>
      <tbody>
        {/* ovde se prikazuvaat albumite, sekoj vo poseban redica */}
        {albums.map((album, index) => {
          return <tr key={index}>
            <td>{album.albumName}</td>
            <td>{album.year}</td>
            <td>{album.artist}</td>
            <td>{album.photo}</td>
          </tr>
        })}
      </tbody>
    </Table>
  </>
  )
}

export default Albums