import { Card } from "./Card"
import { RegistrationForm } from "./Registration/RegistrationForm"
import styles from "./SignUp.module.css"

export const SignUp = () => {
    return <Card>
        <div className={styles.formContainer}>
            <RegistrationForm />

        </div>
        <div className={styles.imgContainer}>
            <img src="/img1.jpg" alt="" />

        </div>
    </Card>
}