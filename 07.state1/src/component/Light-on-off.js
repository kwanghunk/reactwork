import { useState } from "react";


const Light_on_off = () => {
    const [light, setLight] = useState(false);
    return (
        <>
           
            {/*light === 0 ? <h3 style={{color:'Yellow'}}>전구ON</h3> : <h3>전구OFF</h3>}
            {light === 0 ? <button onClick={() => {setLight(light+1)}} style={{color:'Yellow'}}>ON</button> : <button onClick={() => {setLight(light-1)}}>OFF</button>*/}

            { light ? <h2 style={{color:'yellow'}}>전구ON</h2> : <h2>전구OFF</h2>}
            <button onClick={() => {setLight(!light)}}>
                {light ? "끄기" : "켜기"}
            </button>
        </>
    );
}

export default Light_on_off;