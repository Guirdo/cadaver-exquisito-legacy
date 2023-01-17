import { shallow } from 'zustand/shallow'
import useErrorStore from '../../store/errorStore'

function ErrorModal () {
  const { errorMessage, setErrorMessage } = useErrorStore(
    (state) => ({ errorMessage: state.errorMessage, setErrorMessage: state.setErrorMessage }),
    shallow
  )

  return (
    <div className="modal">
      <div className="modal-content">
        <p>
          { errorMessage }
        </p>
        <button
          className="button button--success"
          onClick={() => setErrorMessage(null)}
        >
          Ok
        </button>
      </div>
    </div>
  )
}

export default ErrorModal
