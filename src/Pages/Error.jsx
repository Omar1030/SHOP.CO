import { Link } from "react-router";
const Error = () => {
  return (
    <main className="grid h-screen place-items-center bg-(--main-gray) px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-(--main-black)">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-(--main-black) sm:text-7xl">Page not found</h1>
        <p className="mt-6 text-lg font-medium text-pretty text-(--text-gray) sm:text-xl/8">Sorry, we couldn’t find the page you’re looking for.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link to="/">
            <p className="rounded-md bg-(--main-black) px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-(--main-white) hover:text-(--main-black) hover:border duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Go back home</p>
          </Link>
          <a href="#" className="text-sm font-semibold text-(--text-gray) hover:text-(--main-black)">
            Contact support <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Error;
