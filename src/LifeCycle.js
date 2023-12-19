import {useEffect, useState} from 'react';

const UnmountTest = () => {
    useEffect(() => {
        console.log("Mount!");

        // Unmount(사라지는) 시점에 실행되게 됨
        return() => {
            console.log("Unmount!");
        }
    }, []);
    
    return <div>Unmount Testing Component</div>;
}

const LifeCycle = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggle = () => setIsVisible(!isVisible);

    return(
        <div style={{padding: 20}}>
           <button onClick={toggle}>ON/OFF</button>
           {isVisible && <UnmountTest></UnmountTest>}
        </div>
    )
}

export default LifeCycle;