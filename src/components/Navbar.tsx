import { Link, useLocation } from 'react-router-dom'
import { GoCommentDiscussion } from 'react-icons/go'
import { AiOutlineQuestion } from 'react-icons/ai'
import { MdFavoriteBorder } from 'react-icons/md'

export const Navbar: React.FC = () => {
  const { pathname } = useLocation()
  return (
    <nav className="sticky bottom-0 w-full bg-white dark:bg-slate-900 border-t border-gray-300 dark:border-green-900 p-4 flex items-center justify-around">
      <Link
        to="replies"
        className={`w-20 flex flex-col justify-center items-center ${
          pathname === '/replies' && 'font-bold'
        }`}
      >
        <GoCommentDiscussion size={25} />
        <p className="text-sm">Replies</p>
      </Link>
      <Link
        to="requests"
        className={`w-20 flex flex-col justify-center items-center ${
          pathname === '/requests' && 'font-bold'
        }`}
      >
        <AiOutlineQuestion size={25} />
        <p className=" text-sm">Requests </p>
      </Link>
      <Link
        to="favs"
        className={`w-20 flex flex-col justify-center items-center ${
          pathname === '/favs' && 'font-bold'
        }`}
      >
        <MdFavoriteBorder size={25} /> <p className="text-sm">Favs</p>
      </Link>
    </nav>
  )
}
