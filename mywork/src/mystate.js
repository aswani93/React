
const mystate = {
    'userid': '',
    'Section': 'Login'
}

export default(state = mystate, action) => {
    switch (action.type){
        case 'Login':
        
          return{
              ...state,
              userid: '1',
              Section: action.type

          }
        case 'Dashboard':
          return{
            ...state,
            userid: action.userid,
            Section: action.type

          }
        default:
          return state

    }

}


