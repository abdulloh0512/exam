import { useState } from "react";
import Title from "../../../global/components/Title";
import CardsList from "./CardsList";
import BtnSee from "./BtnSee";

const Section = ({ url, title }: { url: string; title: string }) => {
  const [all, setAll] = useState(false);
  return (
    <div style={{ marginBottom: "50px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "26px",
        }}
      >
        <Title children={title} />
        <BtnSee setAll={setAll} all={all} />
      </div>
      <CardsList api={url} all={all} />
    </div>
  );
};

export default Section;
