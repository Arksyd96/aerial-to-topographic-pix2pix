import React from "react";

const Input = ({ label, content, setContent }) => {
  //   const [content, setContent] = useState(defaultValue || "");

  const inputChangeHandler = (value) => {
    if (value.length < content.length) {
      setContent(value);
    } else {
      const matches = value.match(/[0-9]+/i);
      if (matches) {
        setContent(matches[0]);
      }
    }
  };

  return (
    <div>
      <label
        style={{ fontSize: "13px" }}
        htmlFor={label}
      >{`${label} : `}</label>
      <input
        id={label}
        className="input"
        value={content}
        onChange={(e) => inputChangeHandler(e.target.value)}
      />
    </div>
  );
};

export default Input;
