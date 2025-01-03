import Image from "next/image";
import Link from 'next/link'

const popularCategories = [
  {
    title: "Beef",
    img: "/beefbg.jpeg"
  },
  {
    title: "Chicken",
    img: "/chickenbg.jpeg"
  },
  {
    title: "Pasta",
    img: "/pastabg.jpeg"
  },
  {
    title: "Dessert",
    img: "/dessert.jpg"
  },
  {
    title: "Breakfast",
    img: "/breakfast.jpg"
  }
]

export default async function Home() {
  return (
    <div className="max-w-[1800px] mx-auto">
      <div className="h-[70vh] max-h-[800px] mx-auto relative">
        <Image
          src='/showcase.jpg'
          alt='showcase'
          width={500}
          height={300}
          className="w-full h-full object-cover absolute"
        />

        <div className="absolute h-full w-full bg-black opacity-30 z-20"></div>

        <div className="relative z-30 w-full lg:w-[90%] h-full mx-auto flex items-center justify-center">
          <div className='flex-col flex items-center justify-center text-white'>
            <h1 className="text-9xl md:text-[100px] text-script  tracking-wider">Let&apos;s</h1>
            <h1 className="text-9xl md:text-[150px] text-script tracking-widest">Cook</h1>
            <p className="tracking-widest text-center">THE BEST RECIPES FROM ALL AROUND THE WORLD</p>
            <Link href='/beef'
              className="bg-orange-500 text-white rounded-xl py-2 px-4 hover:bg-orange-800 dark:bg-gray-500  dark:hover:bg-gray-900 cursor-pointer text-right my-5"
            >
              Explore
            </Link>
          </div>
        </div>
      </div>
      
      <div className="lg:w-[90%] mx-auto p-5">
        <h2 
          className="text-left tracking-widest font-bold text-3xl border-b text-orange-500 border-orange-500 dark:text-gray-500 dark:border-gray-500"
        > 
          ABOUT
        </h2>
        <p className="text-lg my-5">
          Welcome to RecipeHub, where a world of delicious recipes awaits your exploration! Discover a diverse collection of meals from various cultures, ranging from quick weeknight dinners to festive dishes. Easily save your favorites with a click, and after trying a recipe, you can remove it from your favorites if it doesn&apos;t suit your taste, ensuring your collection is always just what you love. Join our community of food enthusiasts to share your culinary creations and tips. So grab your apron, gather your ingredients, and happy cooking as you explore flavors from around the globe!
        </p>
      </div>
      
      
      <div className="lg:w-[90%] mx-auto p-5">
        <h2 className="text-xl tracking-widest text-orange-500 dark:text-gray-500 font-bold">Popular Categories:</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 mt-2">
          {popularCategories.map((category) => (
            <Link href={`/${category.title}?search=''`} key={category.title}
              className="my-1 p-1 rounded-xl hover:bg-gray-400 hover:dark:bg-gray-500"
            >
              <Image
                src={category.img}
                alt={category.title}
                width={300}
                height={200}
                className="h-[120px] rounded-xl"
              />
              <h2 className="text-center">{category.title}</h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
