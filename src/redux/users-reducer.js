const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {

    users: [
        {id: 1, followed: true, fullName: 'Zhenya', status: 'Hard work', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 2, followed: true, fullName: 'Katya', status: 'Hard work every day', location: {city: 'Moscow', country: 'Russia'}},
        {id: 3, followed: false, fullName: 'Andrey', status: 'Chill', location: {city: 'Kiev', country: 'Ukraine'}},
        {id: 4, followed: false, fullName: 'Marina', status: 'Weekend', location: {city: 'New York', country: 'America'}},

    ],

}


const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            let stateCopy= {
                ...state,
                // users:[...state.users], одно и тоже что и мап, но нам надо вернуть не всех юзеров не тронутыми, одного нужно изменить
                users: state.users.map (u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }


        case UNFOLLOW:

        default:
            return state;
    }

}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId})


export default usersReducer;

