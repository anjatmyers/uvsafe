const initialState = {
    city: {
        id: 1,
        city: "Miami",
        weather: {
                lat: 0,
                lon: 0,
                cloudCover: 75,
                weatherMain: 'Clouds',
                weather: 'broken clouds',
                img: 'images/brokenclouds.jpg',
                icon: 'http://openweathermap.org/img/wn/02d@2x.png',
                temp: 80.85,
                timeDiff: -5
            },
        uvData: {
                uvCurrent: 9.2,
                uvMax: 9.2,
                uvMaxTime: '2021-02-23T17:35:34.039Z',
                vitDArr: ['15-20 minutes', '20-30 minutes', '30-40 minutes', '40-60 minutes', '60-80 minutes', '80-90 minutes'],
                levelUrl: 'images/low.png',
                levelMaxUrl: 'images/low.png',
                safeExposureTime: ["18 minutes.", "22 minutes.", "29 minutes.", "36 minutes.", "58 minutes.", "1 hour 48 minutes"]
            }
    }
    }
    



const reducer = (state = initialState, action) => {
    
    switch(action.type){

        case 'ADD_CITY':
            return{
                ...state,
                city: action.data
            }


        default: 
        return state;
    }
}

export default reducer