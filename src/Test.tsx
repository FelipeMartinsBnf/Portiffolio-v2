import styled from 'styled-components'

type BtnProps = {
  principal: boolean
  fontSize?: string
}

const Btn = styled.button<BtnProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'red')};
  font-size: ${(props) => props.fontSize || '16px'};
`

const BtnDanger = styled(Btn)`
  background-color: red;
  color: #fff;
  span {
    text-decoration: line-through;
  }
`

function Teste() {
  return (
    <>
      <Btn fontSize="10" principal>
        Olá
      </Btn>
      <Btn principal={false}>Olá</Btn>
      <BtnDanger as="span" principal>
        <span>Perigo</span>
      </BtnDanger>
    </>
  )
}

export default Teste
