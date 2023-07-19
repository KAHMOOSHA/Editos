import React from "react";
import "../styles/document-page.css";
import LogoWriter from "./LogoWriter";
import { CheckCircleTwoTone, FilePdfFilled, SyncOutlined } from "@ant-design/icons";
import * as moment from "moment";

const DocDetails = ({data, saved}) => {
  return (
    <div className="doc-details" key={data.id}>
      <LogoWriter />
      
      <h1>
        {data.title} <sub className="opened_at"> Last opened: {moment(data.last_opened).fromNow()} {saved ? <sub>     <CheckCircleTwoTone /> saved</sub>: <sub><SyncOutlined spin /> saving...</sub>} </sub>
        
      </h1>

      <ul>
        <li>
          <FilePdfFilled />
        </li>
      </ul>
    </div>
  );
};

export default DocDetails;
