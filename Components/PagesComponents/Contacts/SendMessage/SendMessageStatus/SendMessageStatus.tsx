import { useSelector } from "react-redux";
import { GetMessagesStatus } from "../../../../../redux/reducers/Messages/MessagesSelector";

/*====================*/

function SendMessageStatus() {
  const message = useSelector(GetMessagesStatus);

  /*====================*/

  if (message.text) {
    return (
      <div className={`${message.isError ? "error " : ""}status-message line`}>
        <p>{message.text}</p>
      </div>
    );
  } else {
    return <></>;
  }
}

/*====================*/

export default SendMessageStatus;
