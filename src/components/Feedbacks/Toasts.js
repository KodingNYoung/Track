import React, { useState, createElement } from "react";
import {
  BsFillCheckCircleFill,
  BsInfoSquareFill,
  IoIosWarning,
  MdReportGmailerrorred,
  IoCloseOutline
} from "../../imports/icons";

import "../../assets/css/component.css";

let toast;
const Toast = () => {
  const [show, setShow] = useState();
  const [type, setType] = useState();
  const [message, setMessage] = useState();
  const [closable, setClosable] = useState(true);
  const toastProps = {
    success: {
      icon: BsFillCheckCircleFill
    },
    info: {
      icon: BsInfoSquareFill
    },
    warning: {
      icon: IoIosWarning
    },
    error: {
      icon: MdReportGmailerrorred
    }
  };
  toast = (type, message, { closable, autoclose }) => {
    setType(type);
    setMessage(message);
    setShow(true);
    setClosable(closable);

    if (autoclose) {
      setTimeout(() => {
        setShow(false);
      }, 70 * message.length);
    }
  };
  const handleToastSuppress = () => {
    setShow(false);
  };
  return show ? (
    <div className={`toast ${type}-toast`}>
      <div className="toast-content-container">
        <span className="strip"></span>
        <div className="toast-content">
          {createElement(toastProps[type].icon, {
            className: "icon"
          })}
          <p className="text">{message}</p>
        </div>
        {closable && (
          <span className="cancel-btn" onClick={handleToastSuppress}>
            <IoCloseOutline className="icon" />
          </span>
        )}
      </div>
    </div>
  ) : null;
};
export { toast };
export default Toast;
