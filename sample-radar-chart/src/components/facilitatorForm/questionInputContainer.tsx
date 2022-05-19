import TextInput from './textInput'
import { NumberInput } from './numberInput'
import { TextAreaInput } from './textAreaInput'
import { DeleteButton } from './deleteButton'
import { ItemContainer } from './itemContainer'
import { AddButton } from './addButton'
import { Button } from './button'

import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'

export default function QuestionInputContainer() {
  const textInputTitle = 'Name of Retrospective'
  const facilitatorForm = {
    retroTitle: '',
  }

  const setRetroTitle = (value: string) => {
    facilitatorForm['retroTitle'] = value
    console.log(facilitatorForm)
  }

  return (
    <div className="retro-form">
      <h1 className="text-3xl font-bold text-left">
        Radar Chart Retrospective
      </h1>
      <TextInput title={textInputTitle} onChangeHandler={setRetroTitle} />
      <NumberInput title="Voting Scale" />
      <TextAreaInput title="Description" />
      <DeleteButton />
      <ItemContainer />
      <AddButton />
      <Button text="Click me" color="blue" icon={faCirclePlus} />
    </div>
  )
}
