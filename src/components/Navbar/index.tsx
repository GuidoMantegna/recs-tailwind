import { Link } from 'react-router-dom'
import { GoCommentDiscussion } from 'react-icons/go'
import { AiOutlineQuestion } from 'react-icons/ai'
import { MdFavoriteBorder } from 'react-icons/md'

const Navbar: React.FC = () => {
  return (
    <nav className="fixed bottom-0 w-full bg-white border-t border-gray-300  h-20 flex justify-around">
      <div className="w-20 flex flex-col justify-center items-center">
        <GoCommentDiscussion size={25} />
        <p className="text-sm">Replies</p>
      </div>
      <div className="w-20 flex flex-col justify-center items-center">
        <AiOutlineQuestion size={25} />
        <p className=" text-sm">Requests </p>
      </div>
      <Link to='favs' className="w-20 flex flex-col justify-center items-center">
        <MdFavoriteBorder size={25} /> <p className="text-sm">Favs</p>
      </Link>
    </nav>
  )
}

export default Navbar
