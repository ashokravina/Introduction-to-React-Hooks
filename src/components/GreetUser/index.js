import {useState} from 'react'
import {
  MainContainer,
  NameInput,
  MsgContent,
  NameText,
} from './styledComponents'

const GreetUser = () => {
  const [name, setName] = useState('')
  const onChangeName = event => setName(event.target.value)
  console.log("onChange Triggerd")
  console.log(name)
  return (
    <MainContainer>
      <NameInput
        type="text"
        placeholder="Your name"
        value={name}
        onChange={onChangeName}
      />
      <MsgContent>
        Hello <NameText>{name}</NameText>
      </MsgContent>
    </MainContainer>
  )
}

export default GreetUser
