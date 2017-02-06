export default function countReducer (state=0, action){
  if (action.type === 'INCREMENT_COUNT') {
    return state + 1
  } else if (action.type === 'DECREMENT_COUNT') {
    return state - 1
  } else if (action.type ==='RESET_COUNT') {
    return 0
  } else {
    return state
  }
}
