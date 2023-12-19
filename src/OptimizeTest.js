import React, { useState, useEffect } from "react";

const CounterA = React.memo(({count}) => {
    useEffect(() => {
        console.log(`CounterA Update - counter: ${count}`)
    })
    return(
        <div>{count}</div>
    )
});

const CounterB = ({obj}) => {
    useEffect(() => {
        console.log(`CounterB Update - counter: ${obj.count}`)
    })
    return(
        <div>{obj.count}</div>
    )
};
// 객체는 얕은비교를 하기때문에 동일한 값으로 생각을 안함, areEqual함수를 통해 React.memo를 사용한다.
const areEqual = (prevProps, nextProps) => {
    return (prevProps.obj.count === nextProps.obj.count ? true : false)
}
const MemoizdCounterB = React.memo(CounterB, areEqual);

const OptimizeTest = (params) => {
    const [count, setCount] = useState(1);
    const [obj, setObj] = useState({
        count: 1,
    });

    return(
        <div style={{padding: 20}}>
            <div>
                <h2>Counter A</h2>
                <CounterA count={count}></CounterA>
                <button onClick={() => {return setCount(count)}}>A button</button>
            </div>
            <div>
                <h2>Counter B</h2>
                <MemoizdCounterB obj={obj}></MemoizdCounterB>
                <button onClick={() => {
                    return(
                        setObj({
                            count: obj.count
                        })
                    )
                }}>B button</button>
            </div>
        </div>
    )
}

export default OptimizeTest;