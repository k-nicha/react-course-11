const initialState = {
  imageUrl: '',
  pending: false,
  error: null
}

const fetchImage = () => {
  return (dispatch) => {

    dispatch(fetchImagePending())

    fetch('https://picsum.photos/id/1082/1920/1080')
      .then(res => res.arrayBuffer())
      .then(buffer => {
        if (!buffer) {
          dispatch(fetchImageError(' Server error '))
        } else {
          const base64String = btoa(String.fromCharCode(...new Uint8Array(buffer)));
          dispatch(fetchImageSuccess(base64String))
        }
      })
      .catch(error => {
        dispatch(fetchImageError(error.message))
      })
  }
}


const fetchImagePending = () => {
  return {
    type: 'FETCH_IMAGE_PENDING',
    payload: null
  }
}

const fetchImageSuccess = (response) => {
  return {
    type: 'FETCH_IMAGE_SUCCESS',
    payload: { response }
  }
}

const fetchImageError = (error) => {
  return {
    type: 'FETCH_IMAGE_FAILED',
    payload: { error }
  }
}


const imageLogoReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'FETCH_IMAGE_PENDING': {
      return {
        ...state,
        pending: true
      }
    }

    case 'FETCH_IMAGE_SUCCESS': {
      return {
        ...state,
        pending: false,
        imageUrl: action.payload.response,
        error: null
      }
    }

    case 'FETCH_IMAGE_FAILED': {
      return {
        ...state,
        pending: false,
        imageUrl: '',
        error: action.payload.error
      }
    }


    default: {
      return state
    }
  }
}

export {
  fetchImage,
  imageLogoReducer
}