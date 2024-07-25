import { BookCopy, Filter } from 'lucide-react'
import News_Table from '../Page_Components/News/News_Table'
const News = () => {
  return (
    <div className=' flex flex-col w-full justify-center mt-6 items-center'>
      <div className='w-10/12 flex justify-between mb-5 p-2'>
      <button className='px-3 flex gap-6 py-1 bg-blue border-2 items-center rounded-lg'>
                <BookCopy size={20} color='black' />
                <h1 className='text-xl'>Form</h1>
            </button>
            <Filter />
      </div>
            
    <News_Table/>
    </div>
  )
}

export default News