import { Link } from "react-router-dom"
import about_us from '../../assets/about_us_bg.jpg'
const AboutUs = () => {
    return (
      <div className="relative min-h-screen flex items-center justify-center">
          <div className=" absolute inset-0 bg-no-repeat bg-cover bg-center blur-sm"
            style={{ backgroundImage: `url(${about_us})` }}
           >
         </div>

        <div className="relative z-10 mx-6 lg:mx-0 ">
           <div className="p-4 bg-white bg-opacity-65 text-gray-900 rounded-lg shadow-lg max-w-5xl mx-auto mt-8 ">
             <h2 className="text-4xl font-semibold text-center mb-5 mt-4">About us</h2>
             <div className=" text-center text-gray-800">
                  <p >
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi numquam maiores saepe illum architecto quia quod quaerat, eligendi vitae expedita soluta tenetur esse doloremque sint dolorem necessitatibus quisquam mollitia.
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis debitis suscipit illum? Quos voluptate excepturi sapiente neque cupiditate tenetur hic blanditiis doloremque, dicta reiciendis harum inventore debitis velit deserunt. Tempora.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, earum libero quod voluptate nobis architecto assumenda fugiat ut rem rerum facere ad qui pariatur excepturi aperiam vitae reprehenderit dolor error ab, beatae consectetur voluptas molestias esse? Vero nihil qui reprehenderit porro praesentium ex consectetur suscipit quia nesciunt in quidem iusto nisi animi laborum, natus, itaque id repellendus. Alias praesentium itaque laboriosam veritatis optio. Sunt alias incidunt, hic dolore harum dignissimos vel deserunt, deleniti delectus magnam, quis eligendi iure corrupti labore excepturi ipsum. Exercitationem praesentium autem hic architecto, ducimus officiis fuga? Repellendus impedit ratione facilis magni reiciendis ipsum hic dignissimos esse!
                        <br /><br />
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque autem, officiis qui vitae quidem aspernatur nam quaerat quam ex maiores, dolore nemo modi aperiam! Nobis non dignissimos iste impedit labore.
                    </p>

                     <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mt-5">
                        <Link to="/" className="px-4 py-2 bg-black text-white rounded text-sm md:text-base">View more
                        </Link>
                        <Link to="/" className="px-4 py-2 bg-black text-white rounded text-sm md:text-base">Vision & Mission
                        </Link>
                    </div>
               </div>
        </div>
      </div>
   </div>
    )
}

export default AboutUs