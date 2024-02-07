import Gabung from "@/components/kumpulan/Gabung";
import { NavigationMenuDemo } from "@/components/kumpulan/MenuNav";
import { SkeletonDemo } from "@/components/kumpulan/Skeleton";

export default function Home() {
  return (
    <main className="bg-blue-100 min-h-screen flex justify-center ">
      <div>
        <div className="my-20">
          <div className="p-4">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-2xl font-bold text-blue-400">SimoLabs</h1>
              <SkeletonDemo />
            </div>
            <div className="p-4 text-center flex flex-col items-center justify-center">
              <p className="text-base">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <h1 className="text-xl">Lorem ipsum dolor sit.</h1>
              <div className="py-2">
                <NavigationMenuDemo />
              </div>
            </div>
          </div>
        </div>
        <div>
          <Gabung />
        </div>
      </div>
    </main>
  );
}
