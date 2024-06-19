import Image from "next/image";
import styles from "./styles.module.css";
import Button from "@/components/Button";
import Title from "@/components/Title";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
        />
      </div>

      <Title text='The React Framework for the Web' />
      <Button text='Welcome' />

      <table className={styles.table}>
        <thead>
          <tr className={styles.tr}>
            <th className={styles.th}>Company</th>
            <th className={styles.th}>Contact</th>
            <th className={styles.th}>Country</th>
          </tr>
        </thead>

        <tbody>
          <tr className={styles.tr}>
            <td className={styles.td}>Alfreds Futterkiste</td>
            <td className={styles.td}>Maria Anders</td>
            <td className={styles.td}>Germany</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Centro comercial Moctezuma</td>
            <td className={styles.td}>Francisco Chang</td>
            <td className={styles.td}>Mexico</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Ernst Handel</td>
            <td className={styles.td}>Roland Mendel</td>
            <td className={styles.td}>Austria</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Island Trading</td>
            <td className={styles.td}>Helen Bennett</td>
            <td className={styles.td}>UK</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Laughing Bacchus Winecellars</td>
            <td className={styles.td}>Yoshi Tannamuri</td>
            <td className={styles.td}>Canada</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Magazzini Alimentari Riuniti</td>
            <td className={styles.td}>Giovanni Rovelli</td>
            <td className={styles.td}>Italy</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Gatos Anonimos</td>
            <td className={styles.td}>Toto Ruffini</td>
            <td className={styles.td}>France</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Toe Animation</td>
            <td className={styles.td}>Akihito Fukishu</td>
            <td className={styles.td}>Japan</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Electronic Power</td>
            <td className={styles.td}>Oswaldo Reiner Frigmman</td>
            <td className={styles.td}>England</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Art of Mitic History</td>
            <td className={styles.td}>Antonela de la Cruz</td>
            <td className={styles.td}>Mexico</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Maderas Express</td>
            <td className={styles.td}>Pepo Anton Fragatzi</td>
            <td className={styles.td}>Italy</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Textiles de mi Tierra</td>
            <td className={styles.td}>Margara Cecilia Tomsom</td>
            <td className={styles.td}>Peru</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Gatos Anonimos</td>
            <td className={styles.td}>Toto Ruffini</td>
            <td className={styles.td}>France</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Toe Animation</td>
            <td className={styles.td}>Akihito Fukishu</td>
            <td className={styles.td}>Japan</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Electronic Power</td>
            <td className={styles.td}>Oswaldo Reiner Frigmman</td>
            <td className={styles.td}>England</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Art of Mitic History</td>
            <td className={styles.td}>Antonela de la Cruz</td>
            <td className={styles.td}>Mexico</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Maderas Express</td>
            <td className={styles.td}>Pepo Anton Fragatzi</td>
            <td className={styles.td}>Italy</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Textiles de mi Tierra</td>
            <td className={styles.td}>Margara Cecilia Tomsom</td>
            <td className={styles.td}>Peru</td>
          </tr>
        </tbody>
      </table>

    </main>
  );
}
