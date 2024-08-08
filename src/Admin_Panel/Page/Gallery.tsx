import Sidebar from "../Page_Components/Sidebar/Sidebar";
import Gallery_table from './../Page_Components/Gallery/GalleryTable';

const Gallery = () => {
  return (
    <div className="md:flex md:gap-2">
      <Sidebar/>
      <Gallery_table/>
    </div>
  )
}

export default Gallery