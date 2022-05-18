import { TextInput } from './textInput'
import { NumberInput } from './numberInput'
import { TextAreaInput } from './textAreaInput'
import { DeleteButton } from './deleteButton'
import { ItemContainer } from './itemContainer'
import { AddButton } from './addButton'

export default function QuestionInputContainer() {
  const textInputTitle = 'Name of Retrospective'
  return (
    <div className="retro-form">
      <h1 className="text-3xl font-bold text-left">
        Radar Chart Retrospective
      </h1>

      <TextInput title={textInputTitle} />
      <NumberInput title="Voting Scale" />
      <TextAreaInput title="Description" />
      <DeleteButton />
      <ItemContainer />
      <AddButton />
    </div>
  )
}
