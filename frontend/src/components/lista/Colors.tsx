import { ColorsProps } from "../../types";
import useColors from "../../hooks/useColors";
import styled from "styled-components";
import color from "../../services/Color";

export default function Lista() {
  const { cores } = useColors();

  const Style = styled.div`
    text-align: center;
`;

  return (
    <>
      <Style>
        {cores.map((item) => (
          <div
            key={item.id}
            style={{
              backgroundColor: rgbHexadecimal(item),
              color: inverseColor(item)
            }}
          >
            {rgbHexadecimal(item)}
          </div>
        ))}
      </Style>
    </>
  );
}


function rgbHexadecimal(color: ColorsProps) {
  const r =
    color.red.toString(16).length < 2
      ? "0" + color.red.toString(16)
      : color.red.toString(16);
  const g =
    color.green.toString(16).length < 2
      ? "0" + color.green.toString(16)
      : color.green.toString(16);
  const b =
    color.blue.toString(16).length < 2
      ? "0" + color.blue.toString(16)
      : color.blue.toString(16);
  return `#${r}${g}${b}`;
}

function inverseColor(color: ColorsProps) {
  const rinverse = 255 - color.red, ginverse = 255 - color.green,
    binverse = 255 - color.blue;
  const r =
    rinverse.toString(16).length < 2
      ? "0" + rinverse.toString(16)
      : rinverse.toString(16);
  const g =
    ginverse.toString(16).length < 2
      ? "0" + ginverse.toString(16)
      : ginverse.toString(16);
  const b =
    binverse.toString(16).length < 2
      ? "0" + binverse.toString(16)
      : binverse.toString(16);
  return `#${r}${g}${b}`;
}
