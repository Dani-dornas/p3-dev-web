import { useState } from "react";
import styled from "styled-components";
import useColors from "../../hooks/useColors";

export default function Forms() {
  const [red, setRed] = useState("");
  const [green, setGreen] = useState("");
  const [blue, setBlue] = useState("");
  const { save } = useColors();

  const salvar = async (e: any) => {
    //evita o evento natural que é o submit do formulário
    e.preventDefault();
    if (red !== "") {
      save(red,green,blue);
    }
  };

const Style = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  border: 1;
  border-style: solid;
  border-radius: 15px;
  border-width: 3px;
  padding: 15px;
  margin-left: 5vw;
  margin-right: 5vw;
`;

const Entrada = styled.input`
  border-radius: 20px;
  width: 70px;
  margin-left: 5px;
  text-align: center;
`;

const H3 = styled.h3`
 display: flex;
 justify-content: center;
`;

  return (
    <>
      <H3>PROVA DE DEV WEB</H3>
      <Style>
        <div>
          <label>Red:</label>
          <Entrada value={red} onChange={(e:any) => setRed(e.target.value)} />
        </div>
        <div>
          <label>Green:</label>
          <Entrada value={green} onChange={(e:any) => setGreen(e.target.value)} />
        </div>
        <div>
          <label>Blue:</label>
          <Entrada value={blue} onChange={(e:any) => setBlue(e.target.value)} />
        </div>
        <div>
          <button onClick={salvar}>Cadastrar</button>
        </div>
      </Style>

    </>
  );
}
