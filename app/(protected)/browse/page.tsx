import { auth, signOut } from "@/auth";

export default async function BrowsePage() {
  const session = await auth();

  return (
    <div>
      {JSON.stringify(session)}
      <form
        action={async () => {
          "use server";

          await signOut({ redirectTo: "/" });
        }}
      >
        <button type="submit">sign out</button>
      </form>
    </div>
  );
}
