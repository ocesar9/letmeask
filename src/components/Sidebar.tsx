import illustration from "../assets/images/illustration.svg";
import "../styles/sidebar.scss";

export function Sidebar(){
    return(
        <aside>
        <img
          src={illustration}
          alt="Ilstração sinbolizando perguntas e respostas"
        />
        <strong>Crie salas de perguntas</strong>
        <strong className="live-in">AO VIVO</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </aside>
    )
}