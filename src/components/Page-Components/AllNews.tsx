import { Card, CardContent, CardFooter } from "@/components/ui/card";

type newsItem = {
  title: string,
  description: string,
  date: Date,
  societyName: string,
}

let latestNews: newsItem[] = [
  {
    title: 'hello there , testing purpose heading ',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dolorem natus laboriosam quam at, laudantium cupiditate quis! Nihil accusantium nulla illo, quae sint libero vero veniam quas reiciendis molestiae minus!',
    date: new Date(),
    societyName: ' society name '
  },
  {
    title: 'hello there , testing purpose heading ',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dolorem natus laboriosam quam at, laudantium cupiditate quis! Nihil accusantium nulla illo, quae sint libero vero veniam quas reiciendis molestiae minus!',
    date: new Date(),
    societyName: '  society name '
  },
  {
    title: 'hello there , testing purpose heading ',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dolorem natus laboriosam quam at, laudantium cupiditate quis! Nihil accusantium nulla illo, quae sint libero vero veniam quas reiciendis molestiae minus!',
    date: new Date(),
    societyName: '  society name '
  },
  {
    title: 'hello there , testing purpose heading ',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dolorem natus laboriosam quam at, laudantium cupiditate quis! Nihil accusantium nulla illo, quae sint libero vero veniam quas reiciendis molestiae minus!',
    date: new Date(),
    societyName: ' society name '
  },
]

const AllNews = () => {
  return (
    <div className="container pt-10">
      <h2 className="text-3xl lg:text-5xl font-bold text-center pb-10">
        ALL NEWS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {latestNews.map(({ title, description, date, societyName }, index) => (
          <Card key={index} className="hover:border-gray-900 border-md">
            <CardContent className="pt-5 gap-10">
              <div>
                <h2 className="font-bold text-xl text-center">{title}</h2>
                <p className="text-muted-foreground text-center pt-3">by {societyName}</p>
              </div>
              <div className="mt-4">
                <p>{description}</p>
              </div>

            </CardContent>

            <CardFooter>
              <p className="text-muted-foreground">Publised on {date.toDateString()}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default AllNews