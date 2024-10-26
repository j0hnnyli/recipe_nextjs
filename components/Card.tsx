import AddCartButton from "@/components/AddCartButton";
import Link from "next/link";
import Image from "next/image";
import Recipe from "@/types/recipeType";

type Props = {
  id: string;
  title: string;
  imageSrc: string;
  recipe: Recipe;
};

const Card = ({ id, title, imageSrc, recipe }: Props) => {
  return (
    <div className="w-full md:mr-[10px] h-full">
      <div className="relative">
        <Link href={`/recipe/${id}`} className="bg-black relative">
          <Image
            src={imageSrc}
            alt={title}
            height={300}
            width={300}
            className="rounded-2xl hover:border-orange-500 hover:dark:border-gray-500 hover:border-2 hover:p-1"
          />
        </Link>
        <AddCartButton id={id} variant='quick' recipe={recipe}/>
      </div>

      <h1 className="w-[90%] mx-auto text-center">
        {title.length > 20 ? title.slice(0, 18) + '...' : title }
      </h1>
    </div>
  );
};

export default Card;
