import AddCartButton from "@/components/AddCartButton";
import Link from "next/link";
import Image from "next/image";

type Props = {
  id: string;
  title: string;
  imageSrc: string;
};

const Card = ({ id, title, imageSrc }: Props) => {
  return (
    <div className="w-[200px] md:mr-[10px] h-full">
      <div className="relative">
        <Link href={`/recipe/${id}`} className="bg-black relative">
          <Image
            src={imageSrc}
            alt={title}
            height={300}
            width={300}
            className="rounded-2xl hover:border-blue-500 hover:dark:border-gray-500 hover:border-2 hover:p-1"
          />
        </Link>
        <AddCartButton id={id} variant='quick'/>
      </div>

      <h1 className="w-[90%] mx-auto text-center">{title}</h1>
    </div>
  );
};

export default Card;
