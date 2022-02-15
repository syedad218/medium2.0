import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl">
      <Head>
        <title>Medium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex items-center justify-between border-y border-black bg-yellow-400 py-10 lg:py-5">
        <div className="space-y-5 px-10">
          <h1 className="max-w-xl font-serif text-6xl">
            <span className="underline decoration-black decoration-4">
              Medium
            </span>{' '}
            is a place to write, read and connect
          </h1>
          <h2>
            It's free and easy to post content and share it with the world.
            People can learn, connect and discover what’s most interesting and
            useful.
          </h2>
        </div>
        <img
          src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Medium_svg5-512.png"
          alt="medium logo"
          className="hidden h-32 md:inline-flex lg:h-52"
        />
      </div>
    </div>
  )
}
