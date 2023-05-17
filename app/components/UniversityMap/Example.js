import { useRef, useEffect, useState } from "react";
import { Map, APILoader, useMap, useControl } from "@uiw/react-baidu-map";

export default function Example() {
  const divElm = useRef(null);
  const [count, setCount] = useState(0);
  const { setContainer, map, setMap } = useMap({
    widget: ["NavigationControl"],
    enableScrollWheelZoom: true,
  });
  useEffect(() => {
    if (divElm.current && !map) {
      setContainer(divElm.current);
    }
  }, [map]);
  const children = (
    <div style={{ background: "gray", padding: "10px" }}>
      <button
        onClick={() => {
          setCount(count + 1);
          map.setZoom(map.getZoom() + 2);
        }}
      >
        放大2级 {count}
      </button>
    </div>
  );
  const { portal } = useControl({
    map,
    children,
    anchor: BMAP_ANCHOR_TOP_RIGHT,
  });
  return (
    <>
      <div ref={divElm} style={{ height: '800' }} />
      {portal}
    </>
  );
};
