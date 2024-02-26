import React, { useState } from 'react'
import { Modal, Avatar } from 'components'
import { MdEdit } from 'react-icons/md'
import { User } from 'interfaces'

type AvatarPickerProps = {
  setForm: (form: User) => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>, form: User) => void
  user: User | null
  form: User
}

const AvatarPicker: React.FC<AvatarPickerProps> = ({
  setForm,
  user,
  form,
  handleSubmit
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [page, setPage] = useState(1)
  const [rickAndMorty, setRickAndMorty] = useState<string[]>([])

  const fetchAvatars = async (page: number) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}`
    )
    const data = await response.json()
    setRickAndMorty(data.results.map((character: any) => character.image))
  }

  const selectAvatar = async () => {
    fetchAvatars(1).then(() => setIsModalOpen(!isModalOpen))
    setIsModalOpen(!isModalOpen)
  }

  const handlePage = async (direction: string) => {
    fetchAvatars(direction === 'next' ? page + 1 : page - 1).then(() =>
      setPage(direction === 'next' ? page + 1 : page - 1)
    )
  }

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(!isModalOpen)}>
        <form
          className="flex flex-col gap-6"
          onSubmit={(e) => {
            handleSubmit(e, form)
            setIsModalOpen(!isModalOpen)
          }}
        >
          <div className="flex max-w-full flex-wrap gap-1 justify-center">
            {rickAndMorty.map((character) => (
              <img
                key={character}
                src={character}
                alt="rick and morty"
                className={`w-10 h-10 rounded-full ${
                  form.photo &&
                  form.photo.split('-')[1] === character &&
                  'scale-150 transition-all shadow-sm shadow-slate-500'
                }`}
                onClick={() =>
                  setForm({ ...form, photo: `${user?._id}-${character}` })
                }
              />
            ))}
          </div>
          <button
            className="custom-btn"
            disabled={!form.photo || form.photo === user?.photo}
            type="submit"
          >
            Update
          </button>
          <div className="flex justify-around w-full font-medium dark:text-white">
            <button
              onClick={() => handlePage('prev')}
              disabled={page === 1}
              type="button"
            >
              {'<'}
            </button>
            <p>{page}/10</p>
            <button
              onClick={() => handlePage('next')}
              disabled={page === 10}
              type="button"
            >
              {'>'}
            </button>
          </div>
        </form>
      </Modal>
      <div className="flex flex-col items-center justify-center gap-10 mb-6">
        <p className="text-xl font-semibold">Welcome {user?.name}!</p>
        <div className="relative">
          <Avatar classes="w-20 border-2 border-black dark:border-white" />
          <button
            className="absolute bottom-0 -right-2 border bg-white dark:bg-slate-900 p-1 rounded-full shadow-md transition-all hover:shadow-lg"
            onClick={selectAvatar}
            type="button"
          >
            <MdEdit />
          </button>
        </div>
      </div>
    </>
  )
}

export default AvatarPicker
