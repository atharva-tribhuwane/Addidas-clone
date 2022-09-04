import React from "react";
import styles from "./Discribe.module.css";
const Discribe = ({img}) => {
  return (
    <>
      <div
        className={styles.navigation_wrapper_1E4J7}
        id="pdp-navigation"
        tabindex="-1"
      >
        <nav className={`${styles.navigation_pjBTo} ${styles.ready_iRWm3}`}>
          <div className={`${styles.gl_tab} ${styles.nitin}`}>
            <div
              className={`${styles.gl_tab__tab_list} ${styles.gl_tab_tab_list_mobile}`}
            >
              <button className={`${styles.gl_tab_item} ${styles.gallery}`}>
                GALLERY
              </button>
              <button className={styles.gl_tab_item}>DESCRIPTION</button>
              <button className={styles.gl_tab_item}>DETAILS</button>
              <button
                className={`${styles.gl_tab_item} ${styles.gl_tab_item_active}`}
                tabindex="0"
              >
                REVIEWS
              </button>
            </div>
          </div>
        </nav>
      </div>
      <section
        className={`${styles.content_item_1H95n} ${styles.content_visibility_auto} ${styles.full_width_never_3cg9Q} ${styles.overflow_jMM_g} ${styles.visible_2mOxe}`}
      >
        <div id="navigation-target-description">
          <div className={styles.description_2nN4A}>
            <div className={styles.text_content_1EWJO}>
              <h5 className={styles.heading_IO3QX}>Superstar Pride Shoes</h5>
              <h5
                className={`${styles.gl_heading_italic} ${styles.gl_heading_s} ${styles.heading_IO3QX}`}
              >
                Vibrant shoes that pay tribute to the diverse LGBTQ+ community.
              </h5>
              <p>
                The 2022 adidas X Kris Andrew Small Pride Collection was
                inspired by the Stonewall Activists of the Stonewall Uprising in
                1969. Together adidas and Kris Andrew Small offer a collection
                in solidarity &amp; celebration of the LGBTQIA+ community's past
                &amp; present, honouring unique belonging – creating a colourful
                &amp; diverse graphic message among this inclusive &amp;
                optimistic collection. This partnership is also adjacent to
                adidas' two key Global Purpose Partners, Athlete Ally &amp;
                Stonewall UK. <br />
                <br /> You deserve to be seen exactly as you are. These adidas
                Superstar Pride Shoes celebrate the diverse LGBTQ+ community and
                honour the energy that pulses when we all come together as our
                own unique selves. Matching that energy are the bold neon
                graphics on the colourful leather upper. The words "BE TOGETHER"
                wrap their way around the shoe from front to back as a reminder
                of the power that comes from community.
              </p>
            </div>
            <div className={styles.media_1ux_z}>
              <img
                src={img}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Discribe;