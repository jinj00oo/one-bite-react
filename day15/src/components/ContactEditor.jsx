import "./ContactEditor.css";
import { useState, memo, useContext } from "react";
import { ContactDispatchContext } from "../App";

export default memo(function ContactEditor() {
  const { onCreate } = useContext(ContactDispatchContext);
  const [content, setContent] = useState({
    name: "",
    contact: "",
  });

  const onChangeContent = (e) => {
    if (e.target.name === "name") {
      setContent({
        ...content,
        name: e.target.value,
      });
    } else {
      setContent({
        ...content,
        contact: e.target.value,
      });
    }
  };

  const onSubmit = () => {
    onCreate(content);
    setContent({
      name: "",
      contact: "",
    });
  };

  return (
    <div className="ContactEditor">
      <div className="title">Add Contact</div>
      <div className="input_wrapper">
        <input
          className="name"
          name="name"
          value={content.name}
          onChange={onChangeContent}
          placeholder="이름 ..."
        />
        <input
          className="contact"
          name="contact"
          value={content.contact}
          onChange={onChangeContent}
          placeholder="연락처(이메일) ..."
        />
      </div>
      <button onClick={onSubmit}>Add</button>
    </div>
  );
});
