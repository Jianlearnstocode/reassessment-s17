import styles from "./Contact.module.css";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import Form from "../ContactForm/Form";
import { SiIssuu } from "react-icons/si";
import Head from "next/head";
import About from "../Card/About";

const Contact = () => {
  return (
    <section className={styles.main}>
      <Head>
        <title>About</title>
        <meta
          name="description"
          content="Learn more about our company and how to contact us."
        />
      </Head>
      <div className={styles.contact}>
        <h2>About</h2>
        <div className="about">
          <div className={styles.text}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
              totam recusandae voluptate neque placeat esse est! Vero, non
              asperiores dolor optio illo aspernatur voluptatibus nisi deserunt
              fugiat molestias cum quod accusamus placeat laudantium debitis
              animi esse sunt quae eum! Iusto! Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Debitis exercitationem distinctio
              atque aut similique dolorum voluptatibus maiores est harum
              dignissimos voluptatum quam nemo consequatur ipsam, nostrum
              mollitia nam id. Itaque, ratione. Ex quos eos et tempore mollitia
              voluptate delectus, in iure aspernatur pariatur eaque! Iure
              voluptatibus id vel deserunt corrupti dignissimos odit, cum eos
              nesciunt. Iste numquam accusantium, nesciunt ipsam laudantium
              minima aperiam nemo amet reprehenderit facere corrupti, enim sit.
            </p>
          </div>
          <div className={styles.about_cards}>
            <About
              name={"Björn Gustafsson"}
              img="https://images.unsplash.com/photo-1623330188314-8f4645626731?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
            />
            <About
              name="Elandsson Kathrina"
              img="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <About
              name="Ida-Maja Hassellöv"
              img="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </div>
        <h2>Contact</h2>
        <div className={styles.address}>
          <div className={styles.address_item}>
            <h3>Sweden</h3>
            <p>Lemesjö 23, Oskarhamn</p>
          </div>

          <div className={styles.address_item}>
            <h3>All inquiries</h3>
            <p>dovestudio@refteck.se</p>
          </div>
          <div className={styles.address_item}>
            <h3>Follow Me </h3>
            <FaInstagram />
            <FaLinkedin />
            <SiIssuu />
          </div>
        </div>

        <Form />
      </div>
    </section>
  );
};
export default Contact;
