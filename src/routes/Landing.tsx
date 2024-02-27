import { Link } from 'react-router-dom'

const pics2 = [7, 2, 5]
const Landing = () => {
  return (
    <div className="flex flex-col items-center gap-20">
      <h1 className=" text-center font-bold  text-4xl">🎥 RECS</h1>
      <div>
        <div className=" flex items-center  h-16 bg-gradient-to-r  from-indigo-600 to-orange-600  transform -skew-y-6 overflow-hidden">
          <div className="flex transform skew-y-6   h-32">
            {pics2.map((pic) => {
              return (
                <div className="flex overflow-hidden  " key={`pic-${pic}`}>
                  <img
                    src={`/img/movies/${pic}.jpg`}
                    className=" w-48 border-1 border-white"
                  />
                </div>
              )
            })}
          </div>
        </div>
        <div className=" h-28  bg-gradient-to-r  from-indigo-600 to-orange-600  transform -skew-y-6 my-1">
          <div className="flex items-center  h-full  w-7/12 m-auto ">
            <h1 className=" text-center  font-bold text-white  text-lg">
              Ask people for movies recomendation
            </h1>
          </div>
        </div>
      </div>
      <Link to="/home">
        <button className="custom-btn btn-effect w-48">Check it out ⚡</button>
      </Link>
    </div>
  )
}

export default Landing
