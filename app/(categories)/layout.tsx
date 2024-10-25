import { ReactNode } from 'react'
import StickyCategoriesSidebar from './StickyCategoriesSidebar'

type Props = {
  children: ReactNode
}

const CategoriesLayout = ({children}: Props) => {
  return (
    <div className='mt-10 lg:mt-40 max-w-[1800px] mx-auto'>
      <div className=''>
        <StickyCategoriesSidebar/>
        <div className='lg:pl-[200px] w-full pr-10'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default CategoriesLayout