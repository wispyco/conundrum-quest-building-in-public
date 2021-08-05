import Alert from '../components/alert'
import Links from './links'
import Meta from '../components/meta'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <Links />
      <h1 className="text-7xl text-center"><a href="https://conundrum.quest">Conundrum Quest</a></h1>
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
    </>
  )
}
