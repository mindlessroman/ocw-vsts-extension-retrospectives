import TextInput from './textInput'
import { NumberInput } from './numberInput'
import { TextAreaInput } from './textAreaInput'
import { DeleteButton } from './deleteButton'
import { ItemContainer } from './itemContainer'
import { AddButton } from './addButton'
import { Button } from './button'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'

export default function QuestionInputContainer() {
  interface Data {
    retroTitle: string
    voteScaleMax: number
    description: string
  }

  let facilitatorFormData: Data = {
    retroTitle: '',
    voteScaleMax: 5,
    description: '',
  }

  const setFormData = (key: string, value: string): void => {
    facilitatorFormData = { ...facilitatorFormData, [key]: value }
    console.log(facilitatorFormData)
  }

  return (
    <div className="retro-form">
      <h1 className="text-3xl font-bold text-left">
        Radar Chart Retrospective
      </h1>
      <TextInput
        title="Name of Retrospective"
        key="retroTitle"
        onChangeHandler={setFormData}
      />
      <NumberInput
        title="Voting Scale"
        key="voteScaleMax"
        onChangeHandler={setFormData}
      />
      <TextAreaInput
        title="Description"
        placeholder="Please enter a description"
        key="description"
        onChangeHandler={setFormData}
      />
      <DeleteButton />
      <ItemContainer />
      <AddButton />
      <Button text="Click me" color="blue" icon={faCirclePlus} />
    </div>
  )
}
