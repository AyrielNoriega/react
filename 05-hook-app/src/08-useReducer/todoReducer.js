

export const todoReducer = ( initialState, action ) => {
    switch (action.type) {
        case 'ABC':
            throw new Error();
    
        default:
            return initialState;
    }
}
