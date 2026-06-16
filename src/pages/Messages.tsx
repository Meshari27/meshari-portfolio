import { useEffect, useState } from "react";

function Messages() {
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/messages")
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, []);

  function deleteMessage(id: number) {
    fetch(`http://localhost:5000/messages/${id}`, {
      method: "DELETE",
    });

    setMessages(messages.filter((item) => item.id !== id));
  }


  return (
    <section className="about-section">
      <div className="about-header">
        <p className="small-title">Admin Page</p>
        <h1>Messages</h1>
        <p className="admin-message">
          This page is visible for demo purposes.
        </p>
      </div>


      {messages.map((item) => (
        <article className="info-card" key={item.id}>
          <h3>{item.email}</h3>
          <p>{item.message}</p>
          <button onClick={() => deleteMessage(item.id)}>
            Delete
          </button>
        </article>
      ))}
    </section>
  );
}

export default Messages;