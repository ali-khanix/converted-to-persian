import CircleLoader from 'react-spinners/CircleLoader'
import './LoadingSpinner.css'

const LoadingSpinner: React.FC = () => {
  return (
    <div className="loading-spinner">
      <CircleLoader color="#0000ff" size={200} />
    </div>
  )
}

export default LoadingSpinner
