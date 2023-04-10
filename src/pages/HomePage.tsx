import { BeakerIcon } from "@heroicons/react/24/solid"

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />

      <Form />
      <input type={"checkbox"} id={"my-modal"} className={"modal-toggle"} />
      <div className={"modal"}>
        <div className={"modal-box"}>
          <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          This is modal box or likely content?
          <div className={"modal-action"}>
            <button className={"btn btn-primary"}>Oh yeah click me</button>
          </div>
        </div>
      </div>
    </div>
  )
}

function Form(props: {}) {
  return (
    <form className={"flex flex-col gap-4 w-2/3 mx-auto bg-gray-100 shadow p-8"}>
      <h1>Hello</h1>
      <input placeholder={"First name"} className={"input input-bordered input-primary"} type={"text"} />
      <input placeholder={"Last name"} className={"input input-bordered"} />
      <input className={"input input-bordered"} type={"datetime-local"} />
      <div className={"flex gap-4 child:w-full"}>
        <button className={"btn btn-primary"}>
          <BeakerIcon className={"h-6 w-6"} />
          Hello there
        </button>
        <button className={"btn btn-info"}>
          <BeakerIcon className={"h-6 w-6"} />
          Hello there
        </button>
      </div>
    </form>
  )
}

function Hero(props: {}) {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti
            eaque aut repudiandae et a id nisi.</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  )
}


function Navbar(props: {}) {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-none">
        <label htmlFor={"my-modal"} className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </label>
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><a>Item 1</a></li>
          <li tabIndex={0}>
            <a>
              Parent
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 bg-base-100">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div>

      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
          </svg>
        </button>
      </div>
    </div>
  )
}
