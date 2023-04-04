import styled from 'styled-components' /* typescript não reconhece o style-components, precisamos instalar portanto: npm i --save-dev @types/styled-components */

/* Já que o 'principal não é uma propriedade padrão de um botão,
precisamos criálo enquanto um TIPO (TYPE). Ou seja, vamos criá-lo enquanto um atributo booleano
Porque no typescript ele não vai reconhecer como vazio e falso, só o java. No type é preciso criar */
type BotaoProps = {
  principal: boolean
  fontSize?: string /* Interrogação torna propriedade opcional */
}
/* Para adicionarmos a TIPAGEM ao botão, utilizamos as tags '<>: */
const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};

  font-weight: bold;
  font-size: ${(props) => {
    return props.fontSize || '16px' /* Chamamos o 'or' também de fallback */
  }};
`
/* Também podemos criar componentes a partir de outros componentes através da função contrutora do styled */
const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: #fff;

  span {
    text-decoration: line-through;
  }
`
/* aqui tivemos a herançaa e o nesting do SASS ou LESS mas já na template string!!!!!!!! */

/* importando o 'styled' temos acessos a uam série de elementos html com propriedades de seus objetos*/

/* Pequena revisão: os componententes recats são funções que RETORNAM (return) código jsx em elementos HTML
Assim, a função que cria pode ser tanto uma função padrão como uma função arrow.
Fica aí a pergunta, qual a diferença quando criamos uma componente react por uma função padrão ou arrow? */
function Teste() {
  /* Podemos adicionar atributos e recuperá-los na template string do Style components */
  return (
    <>
      <Botao principal>Clique Aqui</Botao>
      <Botao fontSize="14px" principal={false}>
        Cancelar
      </Botao>
      <BotaoPerigo as="a" principal>
        <span>Não clique aqui</span>
      </BotaoPerigo>
      {/* ainda com o 'principal' presente (true), a cascata do css faz com que o BotaoPerigo seja um elemento de maior epsecificade e valor (no limite podemos adicionar o !IMPORTANT para alguma regra) */}
      {/* Utilizando a propriedade 'as' transformamos o componente na tag html que queremos */}
    </>
  )
}

export default Teste
