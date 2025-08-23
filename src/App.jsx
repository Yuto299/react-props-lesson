import "./App.css";
import Card from "./Card";
import contacts from "./Contacts";

function createCard(contact) {
  return (
    <Card
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    // 配列から一つずつ抜き出してpropsに渡している
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}
    </div>
  );
}

export default App;

// まとめると
// 1.	Contacts.js → 配列データを用意
// 2.	App.jsx → 配列から1つずつ取り出して <Card> に渡す
// 3.	Card.jsx → props を受け取って実際のタグに変換
// 4.	ブラウザ → 3人分の連絡先カードが表示される
