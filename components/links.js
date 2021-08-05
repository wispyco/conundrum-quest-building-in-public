import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Links() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="w-3/4 m-auto py-10 text-center">
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
              Project Boards
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://conundrumquest.roadmap.space/`}
              className="mx-3 font-bold hover:underline"
            >
              Road Map
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://airtable.com/shr8jqbtl7yI1Go0X/tblfeNynt1lXAhZj7`}
              className="mx-3 font-bold hover:underline"
            >
              Expenses
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://airtable.com/shr4BC6HIgX6Kiz8o/tblWajQjRLFLWad8w`}
              className="mx-3 font-bold hover:underline"
            >
              Income
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
