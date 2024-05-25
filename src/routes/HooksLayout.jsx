import { useReducer, useRef, useEffect, useMemo, useState } from "react";

const HooksLayout = () => {
    const ref = useRef(null);
    const [numArr, setNumArr] = useState([1, 2, 3]);

    const reducer = (state, action) => {
        switch(action.type) {
            case 'increment':
                return state + 1;
            case 'SET_NAME':
                    setNumArr([...numArr, 5]);
                    return {...state, name: action.payload};
            default:
                return state;
        }
    }

    const [data, dispatch] = useReducer(reducer, {name: 'Kamsi', pin: 1234});

    useEffect(() => {
        //console.log(ref.current.classList.add('active'));
    }, [data]);

    const sum = useMemo(() => {
        return numArr.reduce((total, val) => total + val, 0);
    }, [numArr])

    return (
        <div ref={ref} onClick={() => dispatch({ type: 'SET_NAME', payload: 'Jamie' })}>
            HooksLayout {data.name} {sum}
        </div>
    );
}

export default HooksLayout;