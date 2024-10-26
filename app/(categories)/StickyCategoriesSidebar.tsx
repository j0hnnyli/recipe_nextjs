import { getCategories } from '@/fetchData'
import StickyCategoriesLinks from './StickyCategoriesLinks'
import Category from '@/types/categoryType'

const StickyCategoriesSidebar = async () => {
  const allCategories = await getCategories("categories.php")

  return (
    <div className='h-screen w-[200px] p-2 fixed hidden lg:inline dark:bg-gray-900 bg-gray-200'>
      <h1 className='text-lg text-center uppercase p-2 '>All Categories</h1>
      <ul className='mt-3 w-full h-[60%] overflow-auto'>
        {allCategories.categories.map((category: Category) => (
         <StickyCategoriesLinks
          key={category.idCategory}
          href={category.strCategory}
          title={category.strCategory}
         />
        ))}      
      </ul>
    </div>
  )
}

export default StickyCategoriesSidebar