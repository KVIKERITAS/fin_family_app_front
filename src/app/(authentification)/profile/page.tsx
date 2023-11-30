// Import necessary modules
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Define the input types
export type Inputs = {
  username: string;
  password: string;
  age: any;
  src: string;
};

const ProfilePage = () => {
  const user = {
    username: 'User',
    password: '********',
    age: 25,
    gender: 'Male',
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex items-center mx-4">
      <img
          src="https://i.pinimg.com/474x/36/98/6c/36986c5f14b9153e5c4247c4ce837f52.jpg"
          alt="User Image"
          className="w-35 h-35 rounded-full mb-4"
        />
      </div>

      <div className="ml-8">
        <div className="text-center">
          <label htmlFor="username" className="font-bold">
            Username:
          </label>
          <p id="username" className="mb-2">
            {user.username}
          </p>

          <label htmlFor="age" className="font-bold">
            Age:
          </label>
          <p id="age" className="mb-2">
            {user.age}
          </p>

          <label htmlFor="gender" className="font-bold">
            Gender:
          </label>
          <p id="gender" className="mb-4">
            {user.gender}
          </p>
            
          <Button className="mb-4 mx-5">Update Information</Button>
          <Button className="mb-4">Change password</Button>
          
          <div>
            <Link href="/" className="text-blue-500">
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
