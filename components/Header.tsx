import Link from 'next/link'

function Header() {
  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between p-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <img
            src="https://cdn.mos.cms.futurecdn.net/xJGh6cXvC69an86AdrLD98-1024-80.jpg.webp"
            alt="Medium Blog"
            className="w-24 cursor-pointer object-contain"
          />
        </Link>
        <div className="hidden items-center space-x-5 md:inline-flex">
          <h3 className="cursor-pointer">About</h3>
          <h3 className="cursor-pointer">Contact</h3>
          <h3 className="cursor-pointer rounded-full bg-green-600 px-4 py-1 text-white">
            Follow
          </h3>
        </div>
      </div>
      <div className="flex items-center space-x-5 text-green-600">
        <h3 className="cursor-pointer">Sign In</h3>
        <h3 className="cursor-pointer rounded-full border border-green-600 px-4 py-1">
          Get Started
        </h3>
      </div>
    </header>
  )
}

export default Header
