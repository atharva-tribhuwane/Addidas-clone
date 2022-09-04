import React from "react";
import styles from "./Othersliders.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";

const Othersliders = () => {
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
          <h5 className={styles.heading_IO3QX}>Others Also Bought</h5>
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
                          <div
                            className={`${styles.gl_carousel_item_wrapper} ${styles.gl_carousel_item_wrapper_add_snap} ${styles.product_wrapper_medium_cards_ELOtk} ${styles.show_whishlist_btn_17Sug} ${styles.product_with_less_space_5HpHb}`}
                            // style={{
                            //   width: "24.0964%",
                            //   flex: "0 0 auto",
                            //   minHeight: " 1px",
                            // }}
                          >
                            <div className={styles.hockeycard}>
                              <div>
                                <div>
                                  <div
                                    className={
                                      styles.glass_product_card_container
                                    }
                                  >
                                    <div
                                      className={`${styles.glass_product_card} ${styles.carousel} ${styles.plp_product_card_1sck4} ${styles.product_card_content_2O10f}`}
                                    >
                                      <div
                                        className={
                                          styles.glass_product_card_assets
                                        }
                                      >
                                        <a
                                          href="#"
                                          className={
                                            styles.glass_product_card_assets_link
                                          }
                                        >
                                          <img
                                            src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/71c51dccafc243a2a49bad200062086b_9366/S29055_01_standard.jpg"
                                            alt="Terrex Trailmaker Primegreen Hiking Shoes"
                                            className={`${styles.img_with_fallback_1aENo} ${styles.glass_product_card_image}`}
                                          />
                                        </a>
                                        <a
                                          href="#"
                                          className={
                                            styles.product_card_content_badges_wrapper_2brrU
                                          }
                                        >
                                          <div
                                            className={`${styles.badge_container_DVUWN} ${styles.discount_badge_CxzBQ}`}
                                          >
                                            <span>-30 %</span>
                                          </div>
                                          <div
                                            className={
                                              styles.badge_container_DVUWN
                                            }
                                          >
                                            <div
                                              className={`${styles.gl_price} ${styles.gl_price_horizontal} ${styles.notranslate} ${styles.gl_price_inline_2z9ZX}`}
                                            >
                                              <div
                                                className={`${styles.gl_price_item} ${styles.gl_price_item_crossed} ${styles.notranslate}`}
                                              >
                                                ₹9 999.00
                                              </div>
                                            </div>
                                          </div>
                                        </a>
                                      </div>
                                      <a href="#">
                                        <div
                                          className={
                                            styles.glass_product_card_details
                                          }
                                        >
                                          <p
                                            className={`${styles.gl_paragraph} ${styles.gl_paragraph_s} ${styles.glass_product_card_title}`}
                                          >
                                            Terrex Trailmaker Primegreen Hiking
                                            Shoes
                                          </p>
                                          <p
                                            className={`${styles.gl_paragraph} ${styles.gl_paragraph_s} ${styles.glass_product_card_category}`}
                                          >
                                            TERREX
                                          </p>
                                          {/* <p
                                            className={`${styles.gl_paragraph} ${styles.gl_paragraph_s} ${styles.glass_product_card_label}`}
                                          ></p> */}
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div
                            className={`${styles.gl_carousel_item_wrapper} ${styles.product_wrapper_medium_cards_ELOtk} ${styles.show_whishlist_btn_17Sug} ${styles.product_with_less_space_5HpHb}`}
                            // style="width: 24.-964%; flex: 0 0 auto; min_height: 1px;"
                          >
                            <div className={styles.hockeycard}>
                              <div>
                                <div>
                                  <div
                                    className={
                                      styles.glass_product_card_container
                                    }
                                  >
                                    <div
                                      className={`${styles.glass_product_card} ${styles.carousel} ${styles.plp_product_card_1sck4} ${styles.product_card_content_2O10f}`}
                                    >
                                      <div
                                        className={
                                          styles.glass_product_card_assets
                                        }
                                      >
                                        <a
                                          href="/adicolor_
                                            classics_firebird_track_jacket/HB9431.html?pr=product2_rr&amp;slot=2&amp;rec=mt"
                                          className={
                                            styles.glass_product_card_assets_link
                                          }
                                        >
                                          <img
                                            src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/b72416f3375e4068824dadc801641899_9366/HB9431_21_model.jpg"
                                            alt="Adicolor 
                                              Classics Firebird Track Jacket"
                                            className={`${styles.img_with_fallback_1aENo} ${styles.glass_product_card_image}`}
                                          />
                                        </a>
                                        <a
                                          href="/adicolor_
                                            classics_firebird_track_jacket/HB9431.html?pr=product2_rr&amp;slot=2&amp;rec=mt"
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
                                                ₹5 999.00
                                              </div>
                                            </div>
                                          </div>
                                        </a>
                                      </div>
                                      <a
                                        href="/adicolor_
                                        classics_firebird_track_jacket/HB9431.html?pr=product2_rr&amp;slot=2&amp;rec=mt"
                                      >
                                        <div
                                          className={
                                            styles.glass_product_card_details
                                          }
                                        >
                                          <p
                                            className={`${styles.gl_paragraph} ${styles.gl_paragraph_s} ${styles.glass_product_card_title}`}
                                          >
                                            Adicolor Classics Firebird Track
                                            Jacket
                                          </p>
                                          <p
                                            className={`${styles.gl_paragraph} ${styles.gl_paragraph_s} ${styles.glass_product_card_category}`}
                                          >
                                            Originals
                                          </p>
                                          {/* <p
                                            className={`${styles.gl_paragraph} ${styles.gl_paragraph_s} ${styles.glass_product_card_label}`}
                                          ></p> */}
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div
                            className={`${styles.gl_carousel_item_wrapper} ${styles.product_wrapper_medium_cards_ELOtk} ${styles.show_whishlist_btn_17Sug} ${styles.product_with_less_space_5HpHb}`}
                            // style="width: 24.-964%; flex: 0 0 auto; min_height: 1px;"
                          >
                            <div className={styles.hockeycard}>
                              <div>
                                <div>
                                  <div
                                    className={
                                      styles.glass_product_card_container
                                    }
                                  >
                                    <div
                                      className={`${styles.glass_product_card} ${styles.carousel} ${styles.plp_product_card_1sck4} ${styles.product_card_content_2O10f}`}
                                    >
                                      <div
                                        className={
                                          styles.glass_product_card_assets
                                        }
                                      >
                                        <a
                                          href="/mistico_m/GA1050.html?pr=product2_rr&amp;slot=3&amp;rec=mt"
                                          className={
                                            styles.glass_product_card_assets_link
                                          }
                                        >
                                          <img
                                            src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/71d633fea0ab4cb993deae670055a20e_9366/GA1050_01_standard.jpg"
                                            alt="Mistico M"
                                            className={`${styles.img_with_fallback_1aENo} ${styles.glass_product_card_image}`}
                                          />
                                        </a>
                                        <a
                                          href="/mistico_m/GA1050.html?pr=product2_rr&amp;slot=3&amp;rec=mt"
                                          className={
                                            styles.product_card_content_badges_wrapper_2brrU
                                          }
                                        >
                                          <div
                                            className={`${styles.badge_container_DVUWN} ${styles.discount_badge_CxzBQ}`}
                                          >
                                            <span>-50 %</span>
                                          </div>
                                          <div
                                            className={
                                              styles.badge_container_DVUWN
                                            }
                                          >
                                            <div
                                              className={`${styles.gl_price} ${styles.gl_price_horizontal} ${styles.notranslate} ${styles.gl_price_inline_2z9ZX}`}
                                            >
                                              <div
                                                className={`${styles.gl_price_item} ${styles.gl_price_item_crossed} ${styles.notranslate}`}
                                              >
                                                ₹799.00
                                              </div>
                                            </div>
                                          </div>
                                        </a>
                                      </div>
                                      <a href="/mistico_m/GA1050.html?pr=product2_rr&amp;slot=3&amp;rec=mt">
                                        <div
                                          className={
                                            styles.glass_product_card_details
                                          }
                                        >
                                          <p
                                            className={`${styles.gl_paragraph} ${styles.gl_paragraph_s} ${styles.glass_product_card_title}`}
                                          >
                                            Mistico M
                                          </p>
                                          <p
                                            className={`${styles.gl_paragraph} ${styles.gl_paragraph_s} ${styles.glass_product_card_category}`}
                                          >
                                            Performance
                                          </p>
                                          {/* <p
                                            className={`${styles.gl_paragraph} ${styles.gl_paragraph_s} ${styles.glass_product_card_label}`}
                                          ></p> */}
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div
                            className={`${styles.gl_carousel_item_wrapper} ${styles.product_wrapper_medium_cards_ELOtk} ${styles.show_whishlist_btn_17Sug} ${styles.product_with_less_space_5HpHb}`}
                            // style="width: 24.-964%; flex: 0 0 auto; min_height: 1px;"
                          >
                            <div className={styles.hockeycard}>
                              <div>
                                <div>
                                  <div
                                    className={
                                      styles.glass_product_card_container
                                    }
                                  >
                                    <div
                                      className={`${styles.glass_product_card} ${styles.carousel} ${styles.plp_product_card_1sck4} ${styles.product_card_content_2O10f}`}
                                    >
                                      <div
                                        className={
                                          styles.glass_product_card_assets
                                        }
                                      >
                                        <a
                                          href="/mistico_m/GA1047.html?pr=product2_rr&amp;slot=4&amp;rec=mt"
                                          className={
                                            styles.glass_product_card_assets_link
                                          }
                                        >
                                          <img
                                            src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/c8bc27f416484fcf9e19ae3500f77a8c_9366/GA1047_01_standard.jpg"
                                            alt="Mistico M"
                                            className={`${styles.img_with_fallback_1aENo} ${styles.glass_product_card_image}`}
                                          />
                                        </a>
                                        <a
                                          href="/mistico_m/GA1047.html?pr=product2_rr&amp;slot=4&amp;rec=mt"
                                          className={
                                            styles.product_card_content_badges_wrapper_2brrU
                                          }
                                        >
                                          <div
                                            className={`${styles.badge_container_DVUWN} ${styles.discount_badge_CxzBQ}`}
                                          >
                                            <span>-40 %</span>
                                          </div>
                                          <div
                                            className={
                                              styles.badge_container_DVUWN
                                            }
                                          >
                                            <div
                                              className={`${styles.gl_price} ${styles.gl_price_horizontal} ${styles.notranslate} ${styles.gl_price_inline_2z9ZX}`}
                                            >
                                              <div
                                                className={`${styles.gl_price_item} ${styles.gl_price_item_crossed} ${styles.notranslate}`}
                                              >
                                                ₹799.00
                                              </div>
                                            </div>
                                          </div>
                                        </a>
                                      </div>
                                      <a href="/mistico_m/GA1047.html?pr=product2_rr&amp;slot=4&amp;rec=mt">
                                        <div
                                          className={
                                            styles.glass_product_card_details
                                          }
                                        >
                                          <p
                                            className={`${styles.gl_paragraph} ${styles.gl_paragraph_s} ${styles.glass_product_card_title}`}
                                          >
                                            Mistico M
                                          </p>
                                          <p
                                            className={`${styles.gl_paragraph} ${styles.gl_paragraph_s} ${styles.glass_product_card_category}`}
                                          >
                                            Performance
                                          </p>
                                          {/* <p
                                            className={`${styles.gl_paragraph} ${styles.gl_paragraph_s} ${styles.glass_product_card_label}`}
                                          ></p> */}
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div
                            className={`${styles.gl_carousel_item_wrapper} ${styles.gl_carousel_item_wrapper_add_snap} ${styles.product_wrapper_medium_cards_ELOtk} ${styles.show_whishlist_btn_17Sug} ${styles.product_with_less_space_5HpHb}`}
                            // style="width: 24.-964%; flex: 0 0 auto; min_height: 1px;"
                          >
                            <div className={styles.hockeycard}>
                              <div>
                                <div>
                                  <div
                                    className={
                                      styles.glass_product_card_container
                                    }
                                  >
                                    <div
                                      className={`${styles.glass_product_card} ${styles.carousel} ${styles.plp_product_card_1sck4} ${styles.product_card_content_2O10f}`}
                                    >
                                      <div
                                        className={
                                          styles.glass_product_card_assets
                                        }
                                      >
                                        <a
                                          href="/real_madrid_tiro_anthem_jacket/GR4270.html?pr=product2_rr&amp;slot=5&amp;rec=mt"
                                          className={
                                            styles.glass_product_card_assets_link
                                          }
                                        >
                                          <img
                                            src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/63de19ffc1b14b6cb205ad1000fdf6be_9366/GR4270_21_model.jpg"
                                            alt="Real Madrid Tiro Anthem Jacket"
                                            className={`${styles.img_with_fallback_1aENo} ${styles.glass_product_card_image}`}
                                          />
                                        </a>
                                        <a
                                          href="/real_madrid_tiro_anthem_jacket/GR4270.html?pr=product2_rr&amp;slot=5&amp;rec=mt"
                                          className={
                                            styles.product_card_content_badges_wrapper_2brrU
                                          }
                                        >
                                          <div
                                            className={`${styles.badge_container_DVUWN} ${styles.discount_badge_CxzBQ}`}
                                          >
                                            <span>-50 %</span>
                                          </div>
                                          <div
                                            className={
                                              styles.badge_container_DVUWN
                                            }
                                          >
                                            <div
                                              className={`${styles.gl_price} ${styles.gl_price_horizontal} ${styles.notranslate} ${styles.gl_price_inline_2z9ZX}`}
                                            >
                                              <div
                                                className={`${styles.gl_price_item} ${styles.gl_price_item_crossed} ${styles.notranslate}`}
                                              >
                                                ₹7 599.00
                                              </div>
                                            </div>
                                          </div>
                                        </a>
                                      </div>
                                      <a href="/real_madrid_tiro_anthem_jacket/GR4270.html?pr=product2_rr&amp;slot=5&amp;rec=mt">
                                        <div
                                          className={
                                            styles.glass_product_card_details
                                          }
                                        >
                                          <p
                                            className={`${styles.gl_paragraph} ${styles.gl_paragraph_s} ${styles.glass_product_card_title}`}
                                          >
                                            Real Madrid Tiro Anthem Jacket
                                          </p>
                                          <p
                                            className={`${styles.gl_paragraph} ${styles.gl_paragraph_s} ${styles.glass_product_card_category}`}
                                          >
                                            Performance
                                          </p>
                                          {/* <p
                                            className={`${styles.gl_paragraph} ${styles.gl_paragraph_s} ${styles.glass_product_card_label}`}
                                          ></p> */}
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div
                            className={`${styles.gl_carousel_item_wrapper} ${styles.product_wrapper_medium_cards_ELOtk} ${styles.show_whishlist_btn_17Sug} ${styles.product_with_less_space_5HpHb}`}
                            // style="width: 24.-964%; flex: 0 0 auto; min_height: 1px;"
                          >
                            <div className={styles.hockeycard}>
                              <div>
                                <div>
                                  <div
                                    className={
                                      styles.glass_product_card_container
                                    }
                                  >
                                    <div
                                      className={`${styles.glass_product_card} ${styles.carousel} ${styles.plp_product_card_1sck4} ${styles.product_card_content_2O10f}`}
                                    >
                                      <div
                                        className={
                                          styles.glass_product_card_assets
                                        }
                                      >
                                        <a
                                          href="/adicolor_colorblock_tee/HC4498.html?pr=product2_rr&amp;slot=6&amp;rec=mt"
                                          className={
                                            styles.glass_product_card_assets_link
                                          }
                                        >
                                          <img
                                            src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/727a1b4362864b2aae87add6013b8100_9366/HC4498_21_model.jpg"
                                            alt="Adicolor Colorblock Tee"
                                            className={`${styles.img_with_fallback_1aENo} ${styles.glass_product_card_image}`}
                                          />
                                        </a>
                                        <a
                                          href="/adicolor_colorblock_tee/HC4498.html?pr=product2_rr&amp;slot=6&amp;rec=mt"
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
                                                ₹2 799.00
                                              </div>
                                            </div>
                                          </div>
                                        </a>
                                      </div>
                                      <a href="/adicolor_colorblock_tee/HC4498.html?pr=product2_rr&amp;slot=6&amp;rec=mt">
                                        <div
                                          className={
                                            styles.glass_product_card_details
                                          }
                                        >
                                          <p
                                            className={`${styles.gl_paragraph} ${styles.gl_paragraph_s} ${styles.glass_product_card_title}`}
                                          >
                                            Adicolor Colorblock Tee
                                          </p>
                                          <p
                                            className={`${styles.gl_paragraph} ${styles.gl_paragraph_s} ${styles.glass_product_card_category}`}
                                          >
                                            Originals
                                          </p>
                                          {/* <p
                                            className={`${styles.gl_paragraph} ${styles.gl_paragraph_s} ${styles.glass_product_card_label}`}
                                          ></p> */}
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
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

export default Othersliders;