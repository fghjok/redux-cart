import { get } from "../../utils/request"


export const FETCH_DATA = 'FETCH DATA';

export default store => next => action => {
    const callAPI = action[FETCH_DATA]
    if(typeof callAPI === 'undefined') {
        return next(action)
    }

    const { endpoint, types } = callAPI;

    const actionWith = data => {
        const finalAction = {...action, ...data}
        delete finalAction[FETCH_DATA]
        return finalAction
    }

    const [requestType, successType, failureType] = types

    next(actionWith({type: requestType}))
    return get(endpoint).then(
        response => next(actionWith({
            type: successType,
            response 
        })),
        error => next(actionWith({
            type: failureType,
            error: error.message || '获取数据失败'
        }))
    )
}


