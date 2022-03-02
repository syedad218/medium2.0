import Head from 'next/head'
import Header from '../components/Header'
import { sanityClient, urlFor } from '../sanity'
import { Post } from '../typings'
import Link from 'next/link'

interface Props {
  posts: Post[]
}

export default function Home({ posts }: Props) {
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
      <div className="grid grid-cols-1 gap-3 p-2 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:p-6">
        {posts.map((post) => (
          <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div className="group cursor-pointer overflow-hidden rounded-lg border">
              <img
                src={urlFor(post.mainImage).url()!}
                alt=""
                className="h-60 w-full rounded-t-lg object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
              />
              <div className="flex justify-between rounded-lg bg-white p-5">
                <div>
                  <p className="text-lg font-bold">{post.title}</p>
                  <p className="text-xs">
                    {post.description} by {post.author.name}
                  </p>
                </div>

                <img
                  src={urlFor(post.author.image).url()!}
                  alt="author"
                  className="h-12 w-12 rounded-full"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  // GROQ query example
  const query = `*[_type=="post"]{
    _id, title, slug, 
   author -> {
    name, image
   },
   description,
   mainImage,
   slug
   }`
  const posts = await sanityClient.fetch(query)
  return {
    props: {
      posts,
    },
  }
}
