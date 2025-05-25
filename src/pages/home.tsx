import Navbar from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <main className="min-h-[90vh] w-full">
        <Navbar />

        <section className="container mx-auto flex h-full min-h-[95vh] w-full flex-col items-center justify-center gap-y-5">
          <h2 className="text-center text-5xl font-bold leading-tight lg:w-[50%]">
            Welcome to edu<b className="text-green-600">.</b>
            <i className="text-orange-600">AI</i> Your Gateway to Smarter
            Learning
          </h2>

          <p className="text-center text-xl font-semibold text-gray-400 lg:w-[40%]">
            Learn at your own pace with engaging courses, quizzes, and progress
            tracking. Start your journey today!
          </p>

          <Button onClick={() => navigate('/dashboard')}>Start Learning</Button>
        </section>
      </main>
    </>
  );
}
