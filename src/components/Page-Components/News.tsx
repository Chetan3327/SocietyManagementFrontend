import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { formatDistanceToNow } from 'date-fns'

type newsItem = {
  title: string,
  description: string,
  date: Date,
  author: string,
}

let latestNews: newsItem[] = [
  {
    title: 'hello there , testing purpose heading ',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dolorem natus laboriosam quam at, laudantium cupiditate quis! Nihil accusantium nulla illo, quae sint libero vero veniam quas reiciendis molestiae minus!',
    date: new Date(),
    author: 'author name '
  },
  {
    title: 'hello there , testing purpose heading ',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dolorem natus laboriosam quam at, laudantium cupiditate quis! Nihil accusantium nulla illo, quae sint libero vero veniam quas reiciendis molestiae minus!',
    date: new Date(),
    author: 'author name '
  },
  {
    title: 'hello there , testing purpose heading ',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dolorem natus laboriosam quam at, laudantium cupiditate quis! Nihil accusantium nulla illo, quae sint libero vero veniam quas reiciendis molestiae minus!',
    date: new Date(),
    author: 'author name '
  },
  {
    title: 'hello there , testing purpose heading ',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dolorem natus laboriosam quam at, laudantium cupiditate quis! Nihil accusantium nulla illo, quae sint libero vero veniam quas reiciendis molestiae minus!',
    date: new Date(),
    author: 'author name '
  },
]

let filteredNews: newsItem[] = [
  {
    title: 'hello there , testing purpose heading ',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dolorem natus laboriosam quam at, laudantium cupiditate quis! Nihil accusantium nulla illo, quae sint libero vero veniam quas reiciendis molestiae minus!',
    date: new Date(),
    author: 'author name '
  },
  {
    title: 'hello there , testing purpose heading ',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dolorem natus laboriosam quam at, laudantium cupiditate quis! Nihil accusantium nulla illo, quae sint libero vero veniam quas reiciendis molestiae minus!',
    date: new Date(),
    author: 'author name '
  },
  {
    title: 'hello there , testing purpose heading ',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dolorem natus laboriosam quam at, laudantium cupiditate quis! Nihil accusantium nulla illo, quae sint libero vero veniam quas reiciendis molestiae minus!',
    date: new Date(),
    author: 'author name '
  },
  {
    title: 'hello there , testing purpose heading ',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dolorem natus laboriosam quam at, laudantium cupiditate quis! Nihil accusantium nulla illo, quae sint libero vero veniam quas reiciendis molestiae minus!',
    date: new Date(),
    author: 'author name '
  },
]

latestNews = latestNews.length > 3 ? (latestNews.slice(0, 3)) : (latestNews)
filteredNews = filteredNews.length > 3 ? (filteredNews.slice(0, 2)) : (filteredNews)

const News = () => {

  const [filteredDate, setFilteredDate] = useState<Date | null>(null)

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilteredDate(event.target.value ? new Date(event.target.value) : null)
  }

  const filteredNewsItems = filteredDate ? filteredNews.filter((news) => news.date >= filteredDate) : filteredNews;
  const emptyFilteredNews = filteredNewsItems.length === 0
  return (

    <div className="relative min-h-screen flex items-center justify-center">
      <div className=" absolute inset-0 bg-no-repeat bg-cover bg-center blur-sm"
        style={{ backgroundImage: `url('https://th.bing.com/th/id/OIP.xxSQ2fPtgcP8x4k8aD-ujgHaDt?w=331&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7')` }}
      >
      </div>

      <div className="relative z-10 mx-20 lg:mx-0 ">
        <div className="p-4 bg-white text-gray-900 rounded-lg shadow-lg max-w-5xl mx-auto mt-8 ">
          <h2 className="text-4xl font-semibold text-center mb-5 mt-4">News & Announcements</h2>
          <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className="lg:w-1/2 lg:mr-4 mb-4 lg:mb-0">
              <h3 className="text-2xl font-bold mb-4">Latest news </h3>
              {
                latestNews.map((newsItem: newsItem, index) => (
                  <div key={index} className="flex items-start mb-4">
                    <Calendar />
                    <div className="ml-2 mr-2">
                      <h4 className="">{newsItem.title}</h4>
                      <p className="text-gray-500">{newsItem.author}</p>
                    </div>
                    <div className="">
                      <span className="block text-gray-500">{formatDistanceToNow(newsItem.date)} ago</span>
                    </div>
                  </div>
                ))
              }

            </div>
            <div className="lg:w-1/2 lg:ml-4">
              <label htmlFor="filteredNews" className="font-semibold pb-3">Filter By Date :</label>
              <br />
              <input onChange={handleDateChange} placeholder="Select a date" id="filteredNews" type="date" className="border border-gray-300 rounded px-2 py-1" />
              <p className="text-sm text-gray-500 pt-2 pb-4">Choose a date to filter news and announcements</p>
              <h3 className="text-2xl font-bold mb-4">Filtered news </h3>
              {
                filteredNewsItems.map((newsItem: newsItem, index) => (
                  <div key={index} className="flex items-start mb-4">
                    <Calendar />
                    <div className="ml-3">
                      <h4 className="">{newsItem.title}</h4>
                      <p className="text-gray-500">Posted on {newsItem.date.toDateString
                        ()}</p>
                    </div>
                    <div className="ml-2">
                      <span className="block text-gray-500">lorem jipsum</span>
                    </div>
                  </div>
                ))
              }
              {
                emptyFilteredNews &&
                <p className="text-red-600 text-xl font-semibold">No news according to  your search date !!!</p>
              }
            </div>

          </div>
          
          <div className="flex justify-center mb-5">
            <Link
              to='/' className="border border-gray-800 bg-gray-800 py-3 px-12 text-white  rounded w-"
            >View all news</Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default News;