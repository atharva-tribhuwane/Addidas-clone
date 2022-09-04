import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Discribe from "./Discribe";
import Specifications from "./Specifications";
import Othersliders from "./Othersliders";
import Recently from "./Recently";
// import Alsolike from "./Alsolike";
import Details from "./Details";
import "./Project.css";
import styles from "./Project.module.css";
import { useParams } from "react-router";

const Project = () => {
  const [loading, setLoading] = React.useState(true);
  const [img, setImg] = React.useState("");
  const [Data,setData] = React.useState("");
  console.log("into the project");
  let { id } = useParams();
  id = id.slice(1);
  console.log(id)
  const getData = () => {
    setLoading(true);
    fetch(`https://backend-naseeb-shah.vercel.app/proid/${id}`)
      .then((res) => res.json())
      .then((res) => {
        // console.log("response is",res[0].pro_img);
        setImg(res[0].pro_img);
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        
        console.log(err);
      })
      .finally(()=>{
        console.log("Data1", img);
      })
    
      
  }
  React.useEffect(() => {
    getData();
  }, [])
  return (
    <div id="main-content" tabIndex="-1" className={styles.content_wrapper_3AhOy}>
      {
        loading ? null :

          <div className={styles.content_1rB_s}>
            <div className={styles.gallery_section_tEM20}>
              <div id="navigation-target-gallery">
                <section className={styles.image_viewer_3hBak}>
                  <div
                    className={styles.image_viewer_view_list_container_WEl65}
                    data-current-index="6"
                  >
                    <div className={styles.views_1e88l}>
                      <div
                        className={`${styles.views_scroll_container_2ZUHK} ${styles.animating_nizNR}`}
                      // style="transform: translate3d(-7929.6px, 0px, 0px);"
                      >
                        <Carousel
                          thumbWidth={30}
                          showIndicators={false}
                          showStatus={false}
                          showThumbs={true}
                        >
                          <div className={styles.view_CgbJj}>
                            <img
                              src={img[0]}
                              alt="img"
                              sizes="(max-width: 320px) 320px, (max-width: 420px) 420px, (max-width: 600px) 600px, (max-width: 640px) 640px, (max-width: 840px) 840px"
                            />
                          </div>
                          <div className={styles.view_CgbJj}>
                            <img
                              src={img[1]}
                              alt="img"
                              sizes="(max-width: 320px) 320px, (max-width: 420px) 420px, (max-width: 600px) 600px, (max-width: 640px) 640px, (max-width: 840px) 840px"
                            />
                          </div>  
                        </Carousel>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div
              id="fixed-content"
              tabIndex="-1"
              className="fixed-width-content_1wHJi"
            >
              <Discribe img={img[1]}/>
              <Specifications />
              {/* <Alsolike /> */}
              <Othersliders />
              <Recently />
            </div>
          </div>
      }
      {
        loading?null:<Details data={Data}/>
      }
      
    </div>
  )
};

export default Project;