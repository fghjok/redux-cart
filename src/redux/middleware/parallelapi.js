import { get } from "../../utils/request";

export const PARALLEL_FETCH_DATA = 'PARALLEL FETCH DATA';

export default store => next => action => {
    const callAPIs = action[PARALLEL_FETCH_DATA]
    if(typeof callAPIs === 'undefined') {
        return next(action)
    }

    const { types, endpoints } = callAPIs;

    const actionWith = data => {
        const finalAction = {...action, ...data}
        delete finalAction[PARALLEL_FETCH_DATA]
        return finalAction
    };

    const [requestType, successType, failureType] = types;

    next(actionWith({type: requestType}));
    
    return Promise.all(endpoints.map(endpoint => get(endpoint))).then(
        responses => next(actionWith({
            type: successType,
            responses
        })),
        error => next(actionWith({
            type: failureType,
            error: error.message || '获取数据失败'
        }))
    )
}

