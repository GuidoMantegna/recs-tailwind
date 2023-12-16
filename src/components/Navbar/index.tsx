import { GoCommentDiscussion, GoQuestion } from 'react-icons/go'
import { AiOutlineQuestion } from 'react-icons/ai'
import { MdFavoriteBorder } from 'react-icons/md'

const Navbar: React.FC = () => {
  return (
    <nav className="absolute bottom-0 w-full border-t border-gray-300  h-20 flex justify-around">
        <div className="w-20 flex flex-col justify-center items-center">
          <GoCommentDiscussion size={25} />
          <p className="text-sm">Replies</p>
        </div>
        <div className="w-20 flex flex-col justify-center items-center">
          <AiOutlineQuestion size={25} />
          <p className=" text-sm">Requests </p>
        </div>
        <div className="w-20 flex flex-col justify-center items-center">
          <MdFavoriteBorder size={25} /> <p className="text-sm">Favs</p>
        </div>
      </nav>
  )
}

export default Navbar