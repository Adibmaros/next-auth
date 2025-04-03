import { getServerSession } from "next-auth";
import { authOptions } from "./lib/auth";
import Navbar from "@/components/Navbar";

const Page = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar session={session} />
      <main className="container mx-auto px-4 py-8 flex-1">
        <h1 className="text-2xl font-bold mb-4">Welcome</h1>
        {session ? (
          <div>
            <p className="mb-4">You are signed in as: {session.user?.email}</p>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h2 className="text-lg font-semibold mb-2">Session Data:</h2>
              <pre className="text-sm overflow-auto">{JSON.stringify(session, null, 2)}</pre>
            </div>
          </div>
        ) : (
          <p>Please sign in to access your dashboard</p>
        )}
      </main>
    </div>
  );
};

export default Page;
