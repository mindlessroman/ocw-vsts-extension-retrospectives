import { TextInput } from './textInput'
import { CheckboxInput } from './checkbox'

//Whoa look at all these cool components!
export function ItemContainer() {
  return (
    <div className="itemContainer">
      <TextInput title="Question/Item" />
      <CheckboxInput title="Required?" />
    </div>
  )
}
