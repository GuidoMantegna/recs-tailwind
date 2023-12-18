import AskForm from 'components/AskForm'
import Ask from 'components/Ask'

const Home: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  return (
    <>
      <AskForm />
      <Ask />
      <Ask />
    </>
  )
}

export default Home
