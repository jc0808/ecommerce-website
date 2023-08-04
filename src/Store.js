import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";


// const fetchDataBegin = () => ({
//     type: "FETCH_DATA_BEGIN"
// })

// const fetchDataSuccess = data => ({
//     type: "FETCH_DATA_SUCCESS",
//     payload: { data }
// })

// const fetchDataFailure = error => ({
//     type: "FETCH_DATA_FAILURE",
//     payload: { error }
// })


// function handleErrors(response) {
//     if (!response.ok) {
//         throw Error(response.statusText);
//     }
//     return response
// };


const exampleState = [
    {
        user: {
            fullName: "Joshua Campos",
            location: "Seattle, WA",
            username: "joshua1234",
            password: "joshua123"
        },

        products: [
            {
                id: 1,
                name: "Iphone 14 Pro Max",
                image: "https://avenidatecnologica.com/wp-content/uploads/2023/05/14-pro-max-1.jpg",
                price: 1099
            },

            {
                id: 2,
                name: "Macbook Pro M1 2021",
                image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-mbp16-space-m1-2021?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1643239951000",
                price: 1599
            }
        ],

        cart: []
    }
]


const initialState = {
    data: exampleState,
    loading: false,
    error: null
};

function productsReducer(state = initialState, action) {
    switch (action.type) {
        // case 'load':
        //     return load(state);

        case "FETCH_DATA_BEGIN":
            return {
                ...state,
                loading: true,
                error: null
            };
        case "FETCH_DATA_SUCCESS":
            return {
                ...state,
                loading: false,
                data: action.payload.data
            };
        case "FETCH_DATA_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                data: []
            };

        default:
            return state;
    }
}

// export function fetchData(id) {

//     console.log("starting")



//     store.dispatch(fetchDataBegin());
//     console.log("fetching the data...")
//     fetch(`/profiles/${id}`)
//         .then(handleErrors)
//         .then(res => res.json())
//         .then(json => {
//             store.dispatch(fetchDataSuccess(json));
//             return json
//         })
//         .catch(error => store.dispatch(fetchDataFailure(error)))

// }




export const store = createStore(productsReducer, applyMiddleware(thunk))


export const selectProducts = state => {
    return state.data[0].products
}