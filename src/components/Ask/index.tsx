import { GoCommentDiscussion, GoQuestion } from 'react-icons/go'


const Ask: React.FC = () => {
  return (
    <div className="w-full my-8">
      <div className="flex items-center gap-2">
        <img
          src="/img/users/user-7.jpg"
          alt="user photo"
          className="rounded-full w-10"
        />
        <p className="">John Doe</p>
        <span className="font-extralight text-sm">JUN 2020</span>
      </div>
      <div className="border p-2 h-20 overflow-hidden whitespace-nowrap text-ellipsis dialog-box my-2" >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non
          dolor ac nulla pellentesque condimentum eu at eros. Nunc pulvinar enim
          nec risus laoreet lobortis
      </div>
      <div className='flex justify-end items-center gap-2'>
        <button>
        <GoCommentDiscussion size={20} />
        </button>
          <p className="text-sm">Replies {'(12)'}</p>
      </div>
    </div>
  )
}

export default Ask
