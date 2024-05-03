const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main>
      <div className="text-3xl font-bold underline">Sidebar</div>
      {children}
    </main>
  );
};

export default RootLayout;
