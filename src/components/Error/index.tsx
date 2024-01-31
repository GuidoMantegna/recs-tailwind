const Error: React.FC = () => {
  return (
    <div className="flex flex-col justify-center gap-5">
      <h2 className="text-lg font-semibold">
        Upsss... something went wrong 💥
      </h2>
      <button className="custom-btn" onClick={() => window.history.back()}>
        Go Back
      </button>
    </div>
  )
}

export default Error
