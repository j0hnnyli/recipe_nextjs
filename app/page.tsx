import Image from "next/image";
import Link from 'next/link'
import AnimateReveal from "@/components/AnimateReveal";

export default async function Home() {
  return (
    <>
      <section className="h-[90vh] flex justify-center items-center mt-10">
        <div className="flex flex-col lg:flex-row justify-evenly w-full h-full items-center ">  

          <div className="lg:w-[50%] h-full flex items-center justify-center p-2">

            <div className="grid grid-cols-2 gap-2">
              <div className="gap-2 flex items-center justify-center flex-col mt-10">
                <AnimateReveal delayTime={0}>
                  <Link href='/beef'>
                    <Image src='/beefbg.jpeg' alt='beef' 
                      width={300}
                      height={300}
                      className="w-[300px] h-[250px] object-cover"
                    />
                  </Link>
                </AnimateReveal>

                <AnimateReveal delayTime={0.5}>
                  <Link href='chicken'>
                    <Image src='/chickenbg.jpeg' alt='beef' 
                      width={300}
                      height={300}
                      className="w-[300px] h-[250px] object-cover"
                    />
                  </Link>
                </AnimateReveal>
              </div>

              <div className="gap-2 flex items-center justify-center flex-col mb-10">
                <AnimateReveal delayTime={0.3}>
                  <Link href='pasta'>
                    <Image src='/pastabg.jpeg' alt='beef' 
                      width={300}
                      height={300}
                      className="w-[300px] h-[250px] object-cover"
                    />
                  </Link>
                </AnimateReveal>

                <AnimateReveal delayTime={0.7}>
                  <Link href='/dessert'>
                    <Image src='/dessert.jpg' alt='beef' 
                      width={300}
                      height={300}
                      className="w-[300px] h-[250px] object-cover"
                    />
                  </Link>
                </AnimateReveal>
              </div>
            </div>

          </div>

          <div className="flex justify-center items-center md:w-[50%]">
            <div className="lg:w-[80%] mx-auto p-2">
              <h2 
                className="text-right tracking-widest text-orange-500 font-bold text-3xl border-b border-orange-500"
              >
                ABOUT
              </h2>
              <p className="text-lg my-5">
                Welcome to RecipeHub, where a world of delicious new recipes awaits your exploration. Discover plenty of recipes, save your favorites to try later, and easily remove them once you&apos;ve given them a taste. Happy cooking!
              </p>
              <Link href='/beef'
                className="bg-orange-500 text-white rounded-xl py-2 px-4 hover:bg-orange-800 cursor-pointer text-right my-5"
              >
                Explore
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
