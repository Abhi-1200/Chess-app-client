import PropTypes from "prop-types"

const Piece = ({display,color}) => {
  if(color === '') return <div className='flex items-center justify-center gap-0 h-16 w-16 text-5xl'>{display}</div>
  else if(color === 'green') return <div className='flex items-center justify-center bg-green-400 bg-opacity-80 gap-0 h-16 w-16 text-5xl'>{display}</div>
  return <div className='flex items-center justify-center bg-red-500 gap-0 h-16 w-16 text-5xl'>{display}</div>
}

Piece.propTypes = {
    display: PropTypes.any.isRequired,
    color : PropTypes.any.isRequired
  };

export default Piece