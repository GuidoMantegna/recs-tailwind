
const pics = [
  // 1, 2, 3, 4, 5, 6, 7
  5, 3, 7
]
const pics2 = [
  // 1, 2, 3, 4, 5, 6, 7
  7, 2, 5
]
const Header = () => {;
  return (
    <>
      <header className=" flex items-center  h-16 bg-gradient-to-r  from-indigo-600 to-orange-600  transform -skew-y-6 overflow-hidden">
        <div className="flex transform skew-y-6   h-32">
        {pics2.map((pic) => {
          return (

            <div className="flex overflow-hidden"
            
            key={`pic-${pic}`}>
              <img src={`/img/movies/${pic}.jpg`} className=" w-48" />
            </div>
          )
        })}
        </div>
      </header>
      <header className=" h-28  bg-gradient-to-r  from-indigo-600 to-orange-600  transform -skew-y-6 my-1">
        {/* <div className="flex items-center  transform skew-y-6  h-full w-6/12 m-auto "> */}
        <div className="flex items-center  h-full  w-7/12 m-auto ">
        <h1 className=" text-center  font-bold text-white  text-lg">Ask people for movies recomendation</h1>
        </div>
      </header>
    </>
  );
}

export default Header;