import Alert from "../components/alert";
import Links from "./links";
import Meta from "../components/meta";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <Links />
      <h1 className="text-7xl text-center">
        <a href="https://conundrum.quest">Conundrum Quest</a>
      </h1>
      <div className="py-20">
        <main>{children}</main>
      </div>
      <a
        className="text-center text-2xl py-0 underline w-1/2 m-auto block"
        href="https://conundrum.quest"
      >
        Visit Conundrum Quest
      </a>
      <p className="text-center py-5">
        {" "}
        A place to share new problems, ideas and see who is working on them.
      </p>
    </>
  );
}
