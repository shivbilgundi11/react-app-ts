import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col items-center justify-center gap-y-3">
        <h1 className="text-3xl font-bold underline">Hello Dashboard...!</h1>

        <div>
          <Link to={'/'} className="m-2 underline">
            Go to Home
          </Link>
          <Link to={'/login'} className="m-2 underline">
            Go to Login
          </Link>
          <Link to={'/dashboard'} className="m-2 underline">
            Go to Dasboard
          </Link>
          <Link to={'/ask-edu-ai'} className="m-2 underline">
            Go to AI Chat
          </Link>
        </div>
      </div>
    </>
  );
}
