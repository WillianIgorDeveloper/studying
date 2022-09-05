import styles from './Button.module.scss' 

type Props = {
    title: string,
};

export function Button ({ title }: Props) {
    return (
        <button className={styles.btn}>{title}</button>
    )
}