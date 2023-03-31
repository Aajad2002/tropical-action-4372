import styles from "./PopupReview.module.css";
import { Link } from '@chakra-ui/react'
export const Popup = () => {
  return (
    <div className={styles.popup}>
      <div className={styles.popupSection}>
        <h1>Review Details</h1>
        <p>
          Please ensure that the spelling of your name and other details match
          with your travel document/goct.ID, as these cannot be changed later.
          Errors might lead to cancellation penalties.
        </p>
        <div className={styles.confirm}>
          <h2 style={{ marginLeft: "-2%" }}>ADULT 1</h2>
          <div style={{ display: "grid", gridTemplateColumns: "50%  30%" }}>
            <div style={{ color: "gray" }}>First & Middle Name</div>
            <div style={{ fontWeight: "bolder" }}>Pritam</div>
            <div style={{ color: "gray" }}>Last Name</div>{" "}
            <div style={{ fontWeight: "bolder" }}>Halder</div>
            <div style={{ color: "gray" }}>Gender</div>{" "}
            <div style={{ fontWeight: "bolder" }}>MALE</div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "10%",
justifyContent:"space-between",
            margin: "auto",
           
          
          }}
        >
          <Link href="/ticket">
            {" "}
            <button className={styles.editBtn}>EDIT</button>
          </Link>
          <Link href="/payment">
            {" "}
            <button className={styles.confirmBtn}>CONFIRM</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
