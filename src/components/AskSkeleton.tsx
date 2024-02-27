interface AskSkeletonProps {
  height: string
}

export const AskSkeleton: React.FC<AskSkeletonProps> = ({ height }) => {
  return (
    <div role="status" className="animate-pulse">
      <div className="w-full my-8">
        <div className="flex items-center gap-2">
          <div className="rounded-full w-10 bg-gray-200 dark:bg-gray-500 h-10"></div>
          <p className="bg-gray-200 dark:bg-gray-500 w-16 h-4"></p>
          <span className="bg-gray-200 dark:bg-gray-500 w-14 h-4"></span>
        </div>
        <div
          className={`bg-gray-200 dark:bg-gray-500 ${height} dialog-box my-2`}
        ></div>
        <div className="flex justify-end items-center gap-2">
          <div className="bg-gray-200 dark:bg-gray-500 w-24 h-6"></div>
        </div>
      </div>
    </div>
  )
}
