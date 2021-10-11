import copyImg from "../assets/images/copy.svg";
import "../styles/room-code.scss";
import {toast} from "react-toastify"

type RoomCodeProps = {
    code: string,
}

export function RoomCode(props: RoomCodeProps) {

    function copyRoomCode(){
        navigator.clipboard.writeText(props.code)
        toast.dark('Room id copied!')
    }
  return (
    <button className="room-code" onClick={copyRoomCode}>
      <div className="room-copy-icon">
        <img src={copyImg} alt="copy room code" />
      </div>
      <span>Sala# {props.code}</span>
    </button>
  );
}
