import Image from "next/image";

export default function Sidebar() {
  return (
    <>
      <section className="fixed top-0 z-40 flex flex-col p-4 items-center bg-black w-32 h-screen space-y-8">
        <Image
          src="https://rb.gy/xkacau"
          width={56}
          height={56}
          objectFit="contain"
        />
        <div></div>
      </section>
    </>
  );
}
