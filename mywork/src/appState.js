
const appState ={
    userid:'',
    Section:'Login'
}

export default(state = appState, action) => {
    switch (action.type){
        case 'Login':
          return{
              ...state,
              userid: '',
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
