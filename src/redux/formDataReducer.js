
const ADD_FORM_DATA = 'ADD_FORM_DATA'

export const addFormData = (data) => {
  return {
    type: ADD_FORM_DATA,
    payload: data
  }
}

const initialState = {
  search: ''
}

const formDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FORM_DATA:
      return { search: action.payload }
    default:
      return state
  }
}

export default formDataReducer
