import "./ContactItem.css";
import { memo, useContext } from "react";
import { ContactDispatchContext } from "../App";

export default memo(function ContactItem({ id, name, contact }) {
  const { onDelete } = useContext(ContactDispatchContext);

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="ContactItem">
      <div className="name">{name}</div>
      <div className="contact">{contact}</div>
      <button onClick={onClickDeleteButton}>🗑️ Remove</button>
    </div>
  );
});
