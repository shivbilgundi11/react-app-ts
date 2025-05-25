import { Link, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <nav className="container mx-auto flex h-16 w-full items-center justify-between border-b">
        <Link to={'/dashboard'} className="text-xl font-bold italic text-white">
          edu<b className="text-green-600">.</b>
          <i className="text-orange-600">AI</i>
        </Link>

        <div className="flex items-center justify-center gap-3">
          <Button onClick={() => navigate('/login')}>Login</Button>
          <Button variant={'outline'} onClick={() => navigate('/sign-up')}>
            Sign up
          </Button>
        </div>
      </nav>
    </>
  );
}
