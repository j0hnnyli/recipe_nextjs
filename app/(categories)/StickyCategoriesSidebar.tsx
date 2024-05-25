import { getData } from '@/fetchData'
import StickyCategoriesLinks from './StickyCategoriesLinks'

const StickyCategoriesSidebar = async () => {
  const allCategories = await getData("https://www.themealdb.com/api/json/v1/1/categories.php")


  return (
    <div className='h-screen w-[200px] p-2 fixed hidden lg:inline'>
      <h1 className='text-lg text-center uppercase p-2 '>All Categories</h1>
      <ul className='mt-3 w-full h-[60%] overflow-auto'>
        {allCategories.categories.map((category: any) => (
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