import LoginForm from '@/components/auth/LoginForm';
import { useRouter } from 'next/router';
import { Button } from '@material-tailwind/react';

/**
 * Index page component
 * @author Kenneth Sumang
 * @since  2023.05.17
 */
export default function Index() {
  const router = useRouter();

  /**
   * Handles sign up button click event
   * @returns {Promise<boolean>}
   */
  async function handleSignUpButtonClick(): Promise<boolean> {
    return router.push('/register');
  }

  return (
    <main className="h-screen w-screen">
      <div className="flex flex-col h-full w-full items-center">
        <div className="flex flex-col h-full w-full items-center lg:justify-center">
          <div className="flex flex-col h-full lg:h-auto w-full md:w-3/4 lg:w-1/2 xl:w-1/3">
            <div className="flex flex-row h-full w-full items-center">
              <LoginForm />
            </div>
          </div>
          <div className="md:hidden flex flex-col px-5 pb-5 lg:pt-5 justify-center items-center w-screen">
            <Button
              variant="outlined"
              size="sm"
              className="w-full rounded-full"
              onClick={handleSignUpButtonClick}
            >
              {  "Sign up" }
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
