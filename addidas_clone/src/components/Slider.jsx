import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./Slider.module.css";
import axios from "axios";
// import { Link } from "react-router-dom";

const Slider = () => {
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
        getData();
    }, []);
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
            slidesToSlide: 4,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4.5,
            slidesToSlide: 4,
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
        <>
            {/* <h1 style={{ width: "80%", textAlign: "start", margin: 0, padding: 0, border: "1px solid red", margin: "auto", marginBottom:"0"}}>MEN ORIGINALS</h1> */}
            <div
                className={`${styles.component_wrapper_2BSG0} ${styles.gl_vspace_bpall_medium} ${styles.gl_vspace_bpl_large}`}
            >
                <section
                    className={`${styles.container} ${styles.no_gutters} ${styles.wrapper_rsnwk}`}
                >
                    
                    <div
                        className={`${styles.tabbed_carousel_3dDBE} ${styles.gl_vspace_bpall_small}`}
                    >
                        <section
                            className={`${styles.wrapper} ${styles.productListCarousel} ${styles.untitled_1m1Hc}`}
                        >
                            <div
                                className={`${styles.col_s_12} ${styles.col_l_24} ${styles.carouselBackground}`}
                            ></div>
                            <div className={`${styles.container} ${styles.no_gutters_l}`}>
                                <div
                                    className={styles.product_list_carousel_inner_wrapper_2_hOh}
                                >
                                    <div
                                        className={`${styles.row} ${styles.product_list_carousel_wrapper}`}
                                    >
                                        <div
                                            className={`${styles.gl_carousel} ${styles.gl_carousel_show_pagination} ${styles.col_s_12} ${styles.col_l_24}`}
                                        >
                                            <div className={styles.gl_carousel_content}>
                                                <div
                                                    role="list"
                                                    className={styles.gl_carousel_slider}
                                                // style="display: flex;"
                                                >
                                                    <Carousel
                                                        swipeable={false}
                                                        draggable={false}
                                                        showDots={true}
                                                        shouldResetAutoplay={false}
                                                        responsive={responsive}
                                                        ssr={true} // means to render carousel on server_side.
                                                        // infinite={true}
                                                        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                                                        keyBoardControl={true}
                                                        customTransition="all 1s"
                                                        transitionDuration={500}
                                                        containerClass="carousel-container"
                                                        removeArrowOnDeviceType={["tablet", "mobile"]}
                                                    >
                                                        {slider.map((item, key) => {
                                                            return (
                                                                <div
                                                                    className={`${styles.gl_carousel_item_wrapper} ${styles.product_wrapper_medium_cards_ELOtk} ${styles.product_with_less_space_5HpHb}`}
                                                                >
                                                                    <section>
                                                                        <div>
                                                                            <div>
                                                                                {/* <Link to={"/product"}> */}
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
                                                                                {/* </Link> */}
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
                        </section>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Slider;