import React from 'react';
import { useHistory, useLocation, useParams } from 'react-router';

function Paramspage() {
    const { id } = useParams();
    const location = useLocation();
    const history = useHistory();

    const page = location.pathname.includes("Paramspage");
    console.log(page);
    return (
        <div>
            <h1>Parameter value is : { id }</h1>
            <br/>
            {
                page &&
                <button onClick={() => {(history.push("/"))}} type="button" className="btn btn-lg btn-primary m-2">
                    Navigate To Home Page
                </button>
            }
        </div>
    )
}

export default Paramspage;
