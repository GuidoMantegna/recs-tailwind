const Home: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  return (
    <form onSubmit={handleSubmit}>
      <div id="form-field" className="flex flex-col mb-6">
        <label htmlFor="" className="flex items-center gap-4">
          <img
            src="/img/users/user-7.jpg"
            alt="user photo"
            className="rounded-full w-10 mb-2"
          />
          <h3 className=" text-lg">What mood are you in?</h3>
        </label>
        <textarea
          name="name"
          // onChange={handleFormChange}
          placeholder="I feel bored, I want to watch something funny"
          id="name"
          className="border-b-2 border-black px-2 py-2"
        />
      </div>
      <button className="custom-btn w-full">Ask</button>
    </form>
  )
}

export default Home
