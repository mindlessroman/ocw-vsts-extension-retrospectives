import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// @ts-ignore
export function Button({ text, color, icon }) {
  let buttonClass = `inline-block px-6 py-2.5 bg-${color}-400
    text-white font-medium text-xs leading-tight uppercase rounded-full
    shadow-md hover:bg-${color}-500 hover:shadow-lg focus:bg-${color}-500 focus:shadow-lg
    focus:outline-none focus:ring-0 active:bg-${color}-600 active:shadow-lg transition
    duration-150 ease-in-out`

  return (
    <button type="button" className={buttonClass}>
      <span className="pr-2">
        <FontAwesomeIcon icon={icon} />
      </span>
      {text}
    </button>
  )
}
