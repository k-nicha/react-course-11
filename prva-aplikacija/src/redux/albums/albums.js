const initialState = {
  albums: [],
}

const insertNewAlbum = (data) => {
  return {
    type: 'INSERT_NEW_ALBUM',
    payload: data
  }
}

const removeAlbum = (index) => {
  return {
    type: 'REMOVE_ALBUM',
    payload: index
  }
}

const updateAlbum = (data) => {
  return {
    type: 'UPDATE_ALBUM',
    payload: data
  }
}

const albumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INSERT_NEW_ALBUM': {
      return {
        // na site albumi sto veke se vneseni, dodagi go i noviot album
        albums: [...state.albums, action.payload]
      }
    }

    case 'REMOVE_ALBUM': {
      const indexToRemove = action.payload // pozicijata na elementot vo nizata
      const newAlbumsArray = state.albums.filter(
        (a, i) => i !== indexToRemove
      )

      return {
        albums: newAlbumsArray
      }
    }

    case 'UPDATE_ALBUM': {
      const { rowId } = action.payload
      // albumot sto treba da se updejtira e na pozicija [rowId]
      // treba da se izbrise stariot podatok i na isto mesto
      // da se insertira noviot, sto se naogja vo action.payload

      // ili vtoro reshenie, ednostavno da se zamenat stariot so 
      // noviot element
    }

    default: {
      return state
    }
  }
}

export {
  insertNewAlbum,
  removeAlbum,
  updateAlbum,
  albumsReducer
}