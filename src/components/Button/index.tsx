import styles from './styles.module.css'

export default function Button({ text }: { text: string }) {
  return (
    <button type='button' className={styles.button}>{text}</button>
  )
}
