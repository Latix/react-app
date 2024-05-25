import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/counter';

const CounterLayout = () => {
    const { count, info } = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <>
        <div>
            {info} Counter Layout {count}
        </div>
        <p onClick={() => dispatch(increment())}>+</p>
        <p onClick={() => dispatch(decrement())}>-</p>
        </>
    );
}

export default CounterLayout;