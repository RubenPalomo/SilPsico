import Header from "./components/Header/Header";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between bg-lime-50"
      data-testid="home"
    >
      <Header />
    </main>
  );
}
