import Loader from "/giphy.gif"

const Loading = () => {
  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center">
        <img  src={Loader} alt="" />
    </div>
  )
}

export default Loading