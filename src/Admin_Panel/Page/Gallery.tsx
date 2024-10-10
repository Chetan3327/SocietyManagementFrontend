import Header from "../Page_Components/Sidebar/Header";
import Sidebar from "../Page_Components/Sidebar/Sidebar";
import Gallery_table from './../Page_Components/Gallery/GalleryTable';

const Gallery = () => {
  return (
    <div>
      <Header/>
    <div className="md:flex md:gap-2">
      <Sidebar/>
      <Gallery_table/>
    </div>
    </div>
  )
}

export default Gallery