type Props = {
  onChangeHandler?: (key: string, value: any) => void
  key: string
  title: string
}

// @ts-ignore
const TextInput = ({ title, key, onChangeHandler }: Props) => {
  return (
    <div className="flex justify-center">
      <div className="mb-3 xl:w-96">
        <label
          htmlFor="exampleFormControlInput1"
          className="form-label inline-block mb-2 text-gray-700"
        >
          {title}
        </label>
        <input
          type="text"
          className="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
          id="exampleFormControlInput1"
          placeholder=""
          onChange={(e) => onChangeHandler(key, e.target.value)}
        />
      </div>
    </div>
  )
}

export default TextInput
