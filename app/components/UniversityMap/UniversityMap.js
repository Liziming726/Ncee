import React, { useState } from "react";
import styles from "./UniversityMap.module.css";
//引入地图组件
import { Map, APILoader } from "@uiw/react-baidu-map";
//引入antd divider组件
import { Divider } from "antd";

export default function UniversityMap() {
  return (
    <>
      <div className={styles.main}>
        {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">
          全国大学分布图
        </h2> */}
        <Divider>
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            全国大学分布图
          </h2>
        </Divider>

        <div style={{ width: "100%", height: "600px" }}>
          <APILoader akay="eYpCTECSntZmw0WyoQ7zFpCRR9cpgHFG">
            <Map />
          </APILoader>
        </div>
      </div>
    </>
  );
}
