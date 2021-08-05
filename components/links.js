import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Links() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="w-1/2 m-auto py-10">
          <div className="">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://app.usefathom.com/share/eevjrznr/conundrum+quest"
              className="mx-3 font-bold hover:underline"
            >
              Site Analytics
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://github.com/wispyco/conundrum-quest`}
              className="mx-3 font-bold hover:underline"
            >
              Source Code
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://github.com/wispyco/conundrum-quest/projects`}
              className="mx-3 font-bold hover:underline"
            >
              Project Boards (to do items)
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://poda.io/b/QpTMCQXvNuDackSpRiSC`}
              className="mx-3 font-bold hover:underline"
            >
              Road Map
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
