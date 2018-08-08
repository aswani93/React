var lmsState ={
    mainSection:'',
    subSection:''


}

export default(state = lmsState, action) => {
    switch (action.type){
        case 'UPDATE_MAIN':
          return{
              ...state,
              mainSection: action.mS

          }
        case 'UPDATE_SUB':
          return{

          }
        default:
          return state

    }

}
