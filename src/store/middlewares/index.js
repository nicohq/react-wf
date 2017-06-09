const suffixes = {
    start: '_PENDING',
    success: '_FULFILLED',
    error: '_REJECTED'
}

function handleType(response) {
    const isHttp = Object.prototype.toString.call(response) === '[object Response]';
    // Http
    if (isHttp) {
        if (response.ok) {
            return response.json();
        }
        throw Error(response.statusText);
    }

    return response;
}

const promiseMiddleware = store => next => action => {
    if (action.payload && action.payload instanceof Promise) {
        store.dispatch({
            type: `${action.type + suffixes.start}`
        })

        action.payload
            .then(handleType)
            .then(handler)
            .catch(handler)

    } else {
        return next(action);
    }

    function handler(data) {
        store.dispatch({
            type: `${action.type + suffixes[data instanceof Error ? 'error' : 'success']}`,
            payload: data
        });
    }
}

export { promiseMiddleware };
