import Avatar from "./Avatar";

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
          <p className="info">{props.phone}</p>
          <p className="info">{props.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
