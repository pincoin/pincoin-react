import { useCallback, useEffect, useReducer, useRef } from 'react';

const reducer = (state, action) => {
    const { status, remaining } = state;

    if (action.type === 'start') {
        if (status === 'ready') {
            return {
                ...state,
                status: 'running',
                remaining: action.payload.remaining,
            };
        }
        return state;
    } else if (action.type === 'pause') {
        if (status === 'running') {
            return {
                ...state,
                status: 'paused',
            };
        }
        return state;
    } else if (action.type === 'resume') {
        if (status === 'paused') {
            return {
                ...state,
                status: 'running',
            };
        }
        return state;
    } else if (action.type === 'terminate') {
        if (status === 'running' || status === 'paused') {
            return {
                ...state,
                status: 'ready',
                remaining: 0,
            };
        }
        return state;
    } else if (action.type === 'tick') {
        if (status === 'running') {
            if (remaining < 1) {
                // 타임아웃 종료조건
                return {
                    ...state,
                    status: 'ready',
                    remaining: 0,
                };
            } else {
                return {
                    ...state,
                    remaining: remaining - 1,
                };
            }
        }
        return state;
    } else {
        throw new Error();
    }
};

const useTimer = (initialRemaining = 300, lap = 1000) => {
    const [state, dispatch] = useReducer(reducer, {
        status: 'ready', // ready, running, paused
        remaining: initialRemaining,
    });

    const { status, remaining } = state;

    const id = useRef(null);

    useEffect(() => {
        if (status === 'running') {
            id.current = setInterval(() => {
                dispatch({ type: 'tick' });
            }, lap);
        }

        return () => {
            if (id.current !== null) {
                clearInterval(id.current);
            }
        };
    }, [dispatch, status, initialRemaining, lap]);

    const start = useCallback(
        (remaining) => {
            dispatch({
                type: 'start',
                payload: { remaining: remaining ? remaining : initialRemaining },
            });
        },
        [initialRemaining]
    );

    const terminate = useCallback(() => {
        dispatch({ type: 'terminate' });
    }, []);

    const pause = useCallback(() => {
        dispatch({ type: 'pause' });
    }, []);

    const resume = useCallback(() => {
        dispatch({ type: 'resume' });
    }, []);

    return { id, remaining, status, start, terminate, pause, resume };
};

export default useTimer;
