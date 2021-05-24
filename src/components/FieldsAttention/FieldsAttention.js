import React from "react";
import "./FieldsAttention.scss";
import cloudImg from "../../assets/Placeholder/Academy-Weather-bg160.png";

const FieldsAttention = () => {
  return (
    <div className="fields-attention">
      <div className="fields-attention__image">
        <img src={cloudImg} alt="cloud" />
      </div>
      <div className="fields-attention__text">
        <p>Fill in all the fields and the weather will be displayed</p>
      </div>
    </div>
  );
};

export default FieldsAttention;
