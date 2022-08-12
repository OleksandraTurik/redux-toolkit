import { getPeople } from "../../api/swapi"

export const actionCreator = {
    setPeople: (people) => ({
        type: 'setPeople',
        payload: people
    }),
    setLoading: (loading) => ({
        type: 'setLoading',
        payload: loading
    }),
    setError: (error) => ({
        type: 'setError',
        payload: error
    }),
    getPeoples: () => async (dispatch) => {
        try {
            dispatch(actionCreator.setLoading(true))
            const results = await getPeople()
            dispatch(actionCreator.setPeople(results))
        } catch (error) {
            dispatch(actionCreator.setError(error.message))
            dispatch(actionCreator.setLoading(false))
        }
    }
}