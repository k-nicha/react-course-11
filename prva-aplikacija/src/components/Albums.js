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

  return (<div style={{ padding: '5% 20%' }}>
    <Button onClick={toggleModal}>
      Add new album
    </Button>
    <AddNewAlbum show={isModalShown} handleClose={toggleModal} />
    <Table striped bordered hover style={{ marginTop: '1rem' }}>
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
          return <tr key={index}
            //onclick????
          >
            <td>{album.albumName}</td>
            <td>{album.year}</td>
            <td>{album.artist}</td>
            <td>{album.photo}</td>
          </tr>
        })}
      </tbody>
    </Table>
  </div>
  )
}

export default Albums