import LoginPage from "@/components/LoginPage";
import Separation from "@/components/Separation";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col max-h-screen items-center justify-beetwen w-full max-w-7xl">
      <div className="flex flex-grow p-3.5">
        <aside className="hidden md:flex">
          <Image src="/images/image-home.png" alt="logo_iphone" width={400} height={400} priority className="w-auto h-auto" />
        </aside>
        <div className=" flex flex-col gap-y-3.5 items-center justify-between">
          <Card className="border-none md:border-1 md:border-solid  md:border-gray-400 md:rounded-none md:shadow-none">
            <Image src="/logos/logo.png" alt="logo" width={600} height={600} priority className="w-2/3 mb-3.5" />
            <div className="flex flex-col mt-3.5">
              <LoginPage />
              <Separation />
              <Link href="#" className="flex text-center m-0 justify-center w-full mb-3.5">Mot de passe oublié ?</Link>
            </div>
          </Card>
          <Card className="border-none md:border-1 md:border-solid  md:border-gray-400 md:rounded-none md:shadow-none w-full flex items-center justify-center">
            <aside className="flex gap-x-3.5 items-center justify-center p-0.5 md:p-1.5">
              <p className="flex items-center text-center h-full">Vous n'avez pas de compte ? </p>
              <Link href="#" className="text-blue-400 m-0"> Incrivez-vous</Link>
            </aside>
          </Card>
        </div>
      </div>
      <footer className="flex flex-wrap gap-x-1.5 text-xs mt-3.5">
        <Link href="#">Meta</Link>
        <Link href="#">A propos</Link>
        <Link href="#">Blog</Link>
        <Link href="#">Emploi</Link>
        <Link href="#">Aide</Link>
        <Link href="#">API</Link>
        <Link href="#">Confidentialité</Link>
        <Link href="#">Paramètres des cookies</Link>
        <Link href="#">Conditions</Link>
        <Link href="#">Lieux</Link>
        <Link href="#">Threads</Link>
        <Link href="#">Importation des contacts et non-utilisateurs</Link>
        <Link href="#">Meta Verified</Link>
      </footer>
    </main>
  );
}
