import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";
import useCurrentUser from "@/hooks/useCurrentUser";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  console.log("session", session);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
export default function Home() {
  const { data: user } = useCurrentUser();
  return (
    <>
      <h1 className=" text-9xl text-white">netflixclone</h1>
      <p className=" text-white"> login as {user?.email}</p>
      <button className=" bg-white h-10 w-full" onClick={() => signOut()}>
        {" "}
        logut
      </button>
    </>
  );
}
