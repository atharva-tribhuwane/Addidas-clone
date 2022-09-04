import React from "react";
import { useState, useEffect } from "react";
import styles from "./Othersliders.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";

const Recently = () => {
  const [slider, setSlider] = useState([]);

  const getData = () => {
    axios
      .get("https://fake-server-nitin.herokuapp.com/newarrivals", {})
      .then((res) => setSlider(res.data))
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    // Update the document title using the browser API
    getData();
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3.5,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3.5,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <section
      className={`${styles.content_item_1H95n} ${styles.content_visibility_auto} ${styles.full_width_mobile_1AHib} ${styles.visible_2mOxe}`}
      style={{ containIntrinsicSize: "831.594px 357.375px" }}
    >
      <div id="navigation_target_recommendations_2">
        <div id="recommendations_component">
          <h5 className={styles.heading_IO3QX}>RECENTLY VIEWED ITEMS</h5>
          <div>
            <div>
              <div className={styles.updated_grid_2PV7N}>
                <div
                  className={`${styles.slider_stack_carousel_wrapper} ${styles.glass_slider_stack_carousel_3kfWM}`}
                >
                  <div
                    className={`${styles.gl_carousel} ${styles.gl_carousel_show_pagination} ${styles.gl_carousel_slider_gutter}`}
                  >
                    <div className={styles.gl_carousel_content}>
                      <div
                        className={`${styles.gl_carousel_slider} ${styles.gl_carousel_slider_snap_old_spec}`}
                        //  style="display: flex;"
                      >
                        <Carousel
                          swipeable={false}
                          draggable={false}
                          shouldResetAutoplay={false}
                          responsive={responsive}
                          ssr={true} // means to render carousel on server_side.
                          customTransition="all 1s"
                          containerClass="carousel-container"
                          removeArrowOnDeviceType={["tablet", "mobile"]}
                          itemClass="carousel-item-padding-100-px"
                        >
                          {slider.map((item, key) => {
                            return (
                              <div
                                className={`${styles.gl_carousel_item_wrapper} ${styles.product_wrapper_medium_cards_ELOtk} ${styles.product_with_less_space_5HpHb}`}
                                key={key}
                              >
                                <section>
                                  <div>
                                    <div>
                                      <div
                                        className={
                                          styles.glass_product_card_container
                                        }
                                      >
                                        <div
                                          className={`${styles.glass_product_card} ${styles.is_shoes_3LfBc} ${styles.plp_product_card_1sck4} ${styles.is_mobile_details_bottom_2pDnN} ${styles.product_card_content_2O10f}`}
                                        >
                                          <div
                                            className={
                                              styles.glass_product_card_assets
                                            }
                                          >
                                            <a
                                              href="/forum-low-shoes/GY5833.html?cm_sp=SLOT-6.1-_-?_?_?_?_?-_-PRODUCTSELECTIONCAROUSEL-PRODUCT-CARD-_-788793"
                                              className={
                                                styles.glass_product_card_assets_link
                                              }
                                            >
                                              <img
                                                data-auto-id="image"
                                                src={item.image}
                                                alt="Forum Low Shoes"
                                                className={`${styles.img_with_fallback_1aENo} ${styles.glass_product_card_image}`}
                                              />
                                            </a>

                                            <a
                                              href="/forum-low-shoes/GY5833.html?cm_sp=SLOT-6.1-_-?_?_?_?_?-_-PRODUCTSELECTIONCAROUSEL-PRODUCT-CARD-_-788793"
                                              className={
                                                styles.product_card_content_badges_wrapper_2brrU
                                              }
                                            >
                                              <div
                                                className={
                                                  styles.badge_container_DVUWN
                                                }
                                              >
                                                <div
                                                  className={`${styles.gl_price} ${styles.gl_price_horizontal} ${styles.notranslate} ${styles.gl_price_inline_2z9ZX}`}
                                                >
                                                  <div
                                                    className={`${styles.gl_price_item} ${styles.notranslate}`}
                                                  >
                                                    {item.price}
                                                  </div>
                                                </div>
                                              </div>
                                            </a>
                                          </div>
                                          <a href="/forum-low-shoes/GY5833.html?cm_sp=SLOT-6.1-_-?_?_?_?_?-_-PRODUCTSELECTIONCAROUSEL-PRODUCT-CARD-_-788793">
                                            <div
                                              className={
                                                styles.glass_product_card_details
                                              }
                                            >
                                              <p
                                                className={`${styles.gl_paragraph} ${styles.gl_paragraph_s} ${styles.glass_product_card_title}`}
                                              >
                                                {item.title}
                                              </p>
                                              <p
                                                className={`${styles.gl_paragraph} ${styles.gl_paragraph_s} ${styles.glass_product_card_category}`}
                                              >
                                                {item.category}
                                              </p>
                                              <p
                                                className={`${styles.gl_paragraph} ${styles.gl_paragraph_s} ${styles.glass_product_card_label}`}
                                              >
                                                <span>{item.label}</span>
                                              </p>
                                            </div>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </section>
                              </div>
                            );
                          })}
                        </Carousel>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recently;