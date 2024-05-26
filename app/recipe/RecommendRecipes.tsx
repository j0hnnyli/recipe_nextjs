import { getRecommendRecipes } from "@/fetchData";
import Link from "next/link";
import AddCartButton from "@/components/AddCartButton";
import Image from "next/image";
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
import Recipe from "@/types/recipeType";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Props = {
  area: string;
};

const RecommendRecipes = async ({ area }: Props) => {
  const { meals: recommendRecipes } = await getRecommendRecipes(area);

  return (
    <div className="mt-3 mb-10">
      <h2 className="text-4xl text-blue-500 dark:text-gray-500 tracking-widest mb-4">
        Recommended Recipes : {recommendRecipes?.length}
      </h2>

      <Carousel
        opts={{
          dragFree: true,
          slidesToScroll: 2
        }}
        className='w-[70%] mx-auto lg:w-full'
      >
        <div className="lg:hidden flex items-center mx-auto justify-center">
          <h2>Swipe</h2>
          <ArrowLongRightIcon className="w-7 ml-2"/>
        </div>
        <CarouselContent className="">
          {recommendRecipes && recommendRecipes.map((recommend: Recipe) => (
            <CarouselItem
              key={recommend.idMeal}
              className="lg:basis-1/4 2xl:basis-1/6 mx-auto"
            >
              <div className="relative" >
                <Link href={`/recipe/${recommend.idMeal}`}>
                  <Image
                    src={recommend.strMealThumb}
                    alt={recommend.strMeal}
                    width={210}
                    height={210}
                    className="w-full h-full rounded-2xl"
                  />
                </Link>
                <AddCartButton id={recommend.idMeal} variant='quick'/>
              </div>
              <h2 className="text-center">{recommend.strMeal}</h2>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious  className="hidden lg:inline"/>
        <CarouselNext className="hidden lg:inline"/>
      </Carousel>
    </div>
  );
};

export default RecommendRecipes;
