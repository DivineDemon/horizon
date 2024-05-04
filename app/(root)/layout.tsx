import Sidebar from "@/components/Sidebar";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const loggedIn = {
    firstName: "Mushood",
    lastName: "Hanif",
  };

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />
      {children}
    </main>
  );
};

export default RootLayout;
