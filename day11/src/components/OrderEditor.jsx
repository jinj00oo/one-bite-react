import { useState, useRef } from "react";

const OrderEditor = () => {
  const [input, setsInput] = useState({
    menu: "",
    address: "",
    request: "",
  });

  const inputRef = useRef("");

  const onSubmit = () => {
    if (inputRef.current.value === "") {
      inputRef.current.focus();
      return;
    }
    alert(
      `주문이 완료되었습니다! 메뉴 : ${input.menu}, 주소 : ${input.address}, 요청사항 : ${input.request}`
    );
  };

  const onChange = (e) => {
    setsInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <h2>배달의민족 주문</h2>
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>메뉴 선택</div>
        <select
          name="menu"
          value={input.menu}
          onChange={onChange}
          style={{ width: 300, padding: 5 }}
        >
          <option value={"족발"}>족발</option>
          <option value={"떡볶이"}>떡볶이</option>
          <option value={"아이스크림"}>아이스크림</option>
          <option value={"샐러드"}>샐러드</option>
        </select>
      </div>
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>배달 주소</div>
        <input
          ref={inputRef}
          name="address"
          value={input.address}
          onChange={onChange}
          style={{ width: 300, padding: 5 }}
          placeholder="주소) 서울특별시 xx동 .."
        />
      </div>
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>배달 요청사항</div>
        <textarea
          name="request"
          value={input.request}
          onChange={onChange}
          style={{ width: 300, padding: 5 }}
          placeholder="배달 요청사항을 써 주세요..."
        />
      </div>
      <div>
        <button onClick={onSubmit} style={{ width: 300, padding: 5 }}>
          주문 완료
        </button>
      </div>
    </div>
  );
};

export default OrderEditor;
