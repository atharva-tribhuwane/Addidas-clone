import React from "react";
import styles from "./Details.module.css";
const Details = ({data}) => {
  console.log("data in details.jsx is",data);
  return (
    <div className={styles.sidebar_wrapper_26z7B}>
      <div
        class="margin_3dZhS"
        // style="margin_top: 3065.69px;"
      ></div>
      <div
        className={styles.sidebar_2C_EP}
        // style="top: _0.400024px;"
      >
        <div className={styles.product_description_2cJO2}>
          <div className={styles.pre_header_2xlx4}>
            <div>
              <span>{data[0].categeory} • {data[0].sub_cat}</span>
            </div>
          </div>
          <h1
            className={`${styles.gl_heading} ${styles.gl_heading_regular} ${styles.gl_heading_italic} ${styles.name_1EbZs}`}
          >
            {/* <span>{data[0].pro_name}</span> */}
            <p style={{color:"000000",fontFamily:"AdihausDIN, Helvetics, Arial,sans-serif", fontSize:"27px",textAlign:"left" ,marginTop:"15px",marginBottom:"15px",fontStyle:"italic", fontWeight:"bold", width:"100%"}}>{data[0].pro_name}</p>
          </h1>
          <div className={`${styles.product_price_gJhOl} ${styles.gl_vspace}`}>
            <div
              className={`${styles.price_2HdoY} ${styles.price_3iFPa} ${styles.gl_flex_col}`}
            >
              <div
                className={`${styles.price_wrapper_3PitS} ${styles.price_3iFPa} ${styles.gl_flex_col}`}
              >
                <span className={styles.mrp_5wmiN}>MRP: </span>
                <div
                  className={`${styles.gl_price} ${styles.gl_price_horizontal} ${styles.notranslate}`}
                >
                  <div
                    className={`${styles.gl_price_item} ${styles.notranslate}`}
                  >
                    ₹{data[0].price}
                  </div>
                </div>
              </div>
              <p className={styles.taxes_1IGYX}>(Inclusive of all taxes)</p>
            </div>
          </div>
        </div>
        <section
          className={`${styles.buy_section_yYtjH} ${styles.gl_vspace_bpall_medium}`}
        >
          <a className={styles.skip_link_3x_e} href="#">
            Skip to add to bag
          </a>
          <div className={styles.size_selector_2htsB}>
            <div className={styles.heading_container_3N_Lp}>
              <span className={styles.heading_3LkrG} aria-level="2">
                Available sizes
              </span>
              <div
                className={`${styles.fit_analytics_3e0rK} ${styles.sizes_bottom_controls_1NAou}`}
              ></div>
            </div>
            <div className={`${styles.sizes_3Stmf} ${styles.gl_vspace}`}>
              <button className={`${styles.gl_label} ${styles.size_TqqSo}`}>
                <span>5</span>
              </button>
              <button className={`${styles.gl_label} ${styles.size_TqqSo}`}>
                <span>6</span>
              </button>
              <button className={`${styles.gl_label} ${styles.size_TqqSo}`}>
                <span>7</span>
              </button>
              <button className={`${styles.gl_label} ${styles.size_TqqSo}`}>
                <span>8</span>
              </button>
              <button className={`${styles.gl_label} ${styles.size_TqqSo}`}>
                <span>9</span>
              </button>
              <button className={`${styles.gl_label} ${styles.size_TqqSo}`}>
                <span>10</span>
              </button>
              <button className={`${styles.gl_label} ${styles.size_TqqSo}`}>
                <span>11</span>
              </button>
              <button className={`${styles.gl_label} ${styles.size_TqqSo}`}>
                <span>12</span>
              </button>
            </div>
          </div>
          <div
            className={`${styles.sizes_cta_controls_ZOuuj} ${styles.gl_vspace}`}
          >
            <a className={`${styles.gl_link} ${styles.size_chart_link_FoLY2}`}>
              <span>Size guide</span>
            </a>
          </div>
          <div
            tabindex="_1"
            className={`${styles.add_to_bag_3wgQk} ${styles.gl_vspace_bpall_medium}`}
          >
            <button
              className={`${styles.gl_cta} ${styles.gl_cta_primary} ${styles.gl_cta_full_width}`}
            >
              <span className={`${styles.gl_cta__content}`}>Add To Bag</span>
            </button>
            <button
              className={`${styles.gl_cta} ${styles.gl_cta_icon} ${styles.wishlist_button_2G5ZX}`}
            >
              <div
                className={`${styles.undefined} ${styles.toggle_wishlist_button_my_ER}`}
              >
                ADD
              </div>
            </button>
          </div>
          <div
            className={`${styles.gl_vspace} ${styles.inventory_container_3B8zW}`}
          ></div>
          <div
            id="bottom_callout_stack"
            className={`${styles.unique_selling_points_2nw09} ${styles.gl_vspace_bpall_medium}`}
          >
            <div
              className={`${styles.romotion_callout_wrapper_37Vu5} ${styles.secondary_callout_3ImRu} ${styles.gl_vspace}`}
            >
              <div className={styles.promotion_callout__euJG}>
                <div className={styles.callout_content_3GqpH}>
                  <div
                    className={`${styles.promotion_link_Hrc8T} ${styles.maskable_content_3AqN4}`}
                  >
                    <a
                      className={`${styles.gl_link} ${styles.maskable_hide_content_P_Ds9}`}
                      aria-label="FREE SHIPPING FOR ALL ORDERS"
                    >
                      FREE SHIPPING FOR ALL ORDERS
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${styles.promotion_callout_wrapper_37Vu5} ${styles.secondary_callout_3ImRu} ${styles.gl_vspace}`}
            >
              <div className={styles.promotion_callout__euJG}>
                <div className={styles.callout_content_3GqpH}>
                  <div
                    className={`${styles.promotion_link_Hrc8T} ${styles.maskable_content_3AqN4}`}
                  >
                    <a
                      className={`${styles.gl_link} ${styles.maskable_hide_content_P_Ds9}`}
                      aria-label="FREE RETURNS"
                    >
                      FREE RETURNS
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Details;