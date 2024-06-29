import * as React from "react";
import "./style.css";
import Figure from "./components/Figure";

/**
  - Crie um componente Figure que recebe uma props "type"
  - O componente deve renderizar uma div que terá uma das três formas:
  triângulo, quadrado ou círculo
  - A forma da figura deverá ser controlada pela props "type"
  - Os valores da props "type" são: square, triangle e circle
  - Se a props "type" não for passada, considerar a forma square 
  como padrão
  - Utilize as classes CSS e a props "type" para modificar 
  a forma da figura

  Classes CSS: square, triangle e circle

  Obs: Verifique a aba "Tests" e cheque se todos os testes 
  estão passando para validar sua atividade como concluída.
*/

export default function App() {
  return (
    <div data-testid="App">
      <Figure type="square" />
      <br />
      <br />
      <Figure type="triangle" />
      <br />
      <br />
      <Figure type="circle" />
      <br />
      <br />
      <Figure />
    </div>
  );
}
