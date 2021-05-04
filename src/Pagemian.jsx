import React from 'react';
import { useHistory, useRouteMatch } from 'react-router';

function Pagemian() {
    const history = useHistory();
    const match = useRouteMatch("/");
    console.log(match);
    const par = "what is this";
    const handleclick = () => {
        history.push(`/Paramspage/${par}`)
    }
    return (
        <div className="container p-5">
            {
                match && match.isExact === false &&
                <>
                    <button onClick={() => {history.push("/")}} type="button" className="btn btn-lg btn-primary m-2">
                        Navigate To Home Page 
                        <span className="badge badge-light"></span>
                    </button>
                    <br/>
                </>
            }
            <button onClick={() => {history.push("/Page1")}} type="button" className="btn btn-lg btn-primary m-2">
                Navigate To Page 
                <span className="badge badge-light">1</span>
            </button>
            <br/>
            <button onClick={() => {history.push("/Page2")}} type="button" className="btn btn-lg btn-primary m-2">
                Navigate To Page 
                <span className="badge badge-light">2</span>
            </button>
            <br/>
            <button onClick={() => {history.push("/Page3")}} type="button" className="btn btn-lg btn-primary m-2">
                Navigate To Page 
                <span className="badge badge-light">3</span>
            </button>
            <br/>
            <button onClick={handleclick} type="button" className="btn btn-lg btn-primary m-2">
                Navigate To Params Page 
                <span className="badge badge-light">3</span>
            </button>
        </div>
    )
}

export default Pagemian;
