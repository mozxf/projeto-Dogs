import styles from "./Input.module.scss"

export const Input = ({label, type, id, value, onChange}) => {



return (<div>

<label htmlFor={id} >{label}</label>
<input className={styles.input} value ={value} onChange={onChange} type={type} id={id} />
</div>)


}