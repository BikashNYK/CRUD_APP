const initialState = [
    {
        id : 0,
        name: "Bikash Nayak",
        number : 7001791903,
        email : "bkn@g.com"
    },
    {
        id : 1,
        name: "Vikash Paswan",
        number : 4564546538,
        email: "test@test.com"
    }
]

const contactReducer = (state = initialState, action)=>{
    
    switch(action.type) {

        case "ADD_CONTACT" :{
            state = [...state , action.payload]
            return state
        }
        case "UPDATE_CONTACT" :{
            const updateState = state.map((e)=>(
                e.id === action.payload.id ? action.payload : e
            ))

            state = updateState;
            return state
        }

        case "DELETE_DATA" : {
            return state.filter((e)=>{
                return e.id !== action.payload
            })
        }

        default :{
            return state
        }
    }
}

export default contactReducer