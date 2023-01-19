import Logo from "../components/logo";

export default function Home() {
  return (
    <section className={`container mx-auto px-8 h-[480px] flex flex-col justify-center`}>
      <Logo />
    </section>
  );
}
