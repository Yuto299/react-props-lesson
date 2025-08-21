import Avatar from "./Avatar";
import Email from "./Email";
import Phone from "./Phone";

const Card = (props) => {
  // 渡せるように準備をしておく（実際に渡して画面に表示させるのはApp.jsx）
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Avatar imgURL={props.imgURL} />
        </div>
        <div className="bottom">
          <Phone phone={props.phone} />
          <Email email={props.email} />
        </div>
      </div>
    </div>
  );
};

export default Card;
