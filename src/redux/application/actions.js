export const SET_STATE='@@application/SET_STATE';
export const APP_LOADING='@@application/APP_LOADING';
export const OPEN_TOAST='@@application/OPEN_TOAST';
export const CLOSE_TOAST='@@application/CLOSE_TOAST';


export const appLoading = (loading) => {
  return {
    type: APP_LOADING,
    payload: {
      loading
    }
  }
}

export const openToast = (message) => {
  return {
    type: OPEN_TOAST,
    payload: {
      message
    }
  }
}

export const closeToast = () => {
  return {
    type: CLOSE_TOAST
  }
}
