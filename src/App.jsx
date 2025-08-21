import "./App.css";
import Card from "./Card";
import contacts from "./Contacts";

function App() {
  return (
    // 配列から一つずつ抜き出してpropsに渡している
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name={contacts[0].name}
        imgURL={contacts[0].imgURL}
        phone={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        imgURL={contacts[1].imgURL}
        phone={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        imgURL={contacts[2].imgURL}
        phone={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;

// まとめると
// 1.	Contacts.js → 配列データを用意
// 2.	App.jsx → 配列から1つずつ取り出して <Card> に渡す
// 3.	Card.jsx → props を受け取って実際のタグに変換
// 4.	ブラウザ → 3人分の連絡先カードが表示される
