import AskForm from 'components/AskForm'
import Ask from 'components/Ask'
import useCategories from 'customHooks/useRequests'

const Home: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  const { asks, loading, error } = useCategories()
  return (
    <>
      <AskForm />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="w-full">
          {asks.map((ask) => (
            <Ask key={ask._id} {...ask} />
          ))}
        </div>
      )}
      {/* <Ask />
      <Ask /> */}
    </>
  )
}

export default Home
