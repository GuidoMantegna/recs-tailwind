import { Header } from 'components'
import { useRouteError, Link } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <>
      <Header />
      <div
        id="error-page"
        className="h-screen flex flex-col items-center mt-10"
      >
        <h2 className="text-xl font-medium">Oops! 😅</h2>
        <p>Sorry, an unexpected error has occurred.</p>
        <p className="my-10">
          {/* @ts-ignore */}
          <i>{error?.statusText || error.message}</i>
        </p>
        <Link
          to="https://guidomantegna.github.io/GuidoMantegna/"
          target="blank"
          className="text-sm text-center italic pb-2 absolute bottom-6"
        >
          Developed by Guido Mantegna
        </Link>
      </div>
    </>
  )
}
