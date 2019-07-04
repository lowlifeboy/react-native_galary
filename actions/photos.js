export function photosHasErrored(bool) {
  return {
    type: 'PHOTOS_HAS_ERRORED',
    hasErrored: bool,
  };
}

export function photosIsLoading(bool) {
  return {
    type: 'PHOTOS_IS_LOADING',
    isLoading: bool,
  };
}

export function photosFetchDataSuccess(photos) {
  return {
    type: 'PHOTOS_FETCH_DATA_SUCCESS',
    photos,
  };
}

export function photosFetchData(url) {
  return dispatch => {
    dispatch(photosIsLoading(true));

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(photosIsLoading(false));

        return response;
      })
      .then(response => response.json())
      .then(photos => dispatch(photosFetchDataSuccess(photos)))
      .catch(() => dispatch(photosHasErrored(true)));
  };
}
