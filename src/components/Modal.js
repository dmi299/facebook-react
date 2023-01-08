import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'
import Form from './Form';
import './Modal.css'
const PopupExample = () => (
    <Popup
        trigger={<button className="button"> Create new account </button>}
        modal
        nested
    >
        {close => (
            <div className="">
                <button className="close" onClick={close}>
                    &times;
                </button>
                <div className="">
                    <Form />
                </div>
                <div className="">
                   
                </div>
            </div>
        )}
    </Popup>

)
export default PopupExample;