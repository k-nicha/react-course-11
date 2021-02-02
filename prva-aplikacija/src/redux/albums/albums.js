const initialState = {
  albums: [],
}

const insertNewAlbum = (data) => {
  return {
    type: 'INSERT_NEW_ALBUM',
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

    default: {
      return state
    }
  }
}

export {
  insertNewAlbum,
  albumsReducer
}