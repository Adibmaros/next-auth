import { getServerSession } from "next-auth";
import { authOptions } from "./lib/auth";
import Lists from "@/components/Lists";

const page = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <div>
      <Lists />

      <pre>{JSON.stringify(session)}</pre>
    </div>
  );
};

export default page;
