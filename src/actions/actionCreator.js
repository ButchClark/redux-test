export const DOMAIN_THING_REQUEST_STARTED='DOMAIN_THING_REQUEST_STARTED'
export const DOMAIN_THING_REQUEST_SUCCESS='DOMAIN_THING_REQUEST_SUCCESS'

export const getThings = () =>{
    return async (dispatch) =>{
        dispatch({ type: DOMAIN_THING_REQUEST_STARTED })
        const resp = await fetch('/api/messages')
        const json = await resp.json()
        console.log(`> Made call to API server: ${JSON.stringify(json)}`)
        dispatch({
            type: DOMAIN_THING_REQUEST_SUCCESS,
            someExtraData: json,
        })
    }
}
