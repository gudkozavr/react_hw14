import { connect } from "react-redux";
import styles from "./styles.module.css";

function User({ name, status }) {
  console.log(name);

  return (
    <div className={styles.user_container}>
      <h2>User Info</h2>
      <p>User name: {name}</p>

      <p>Status: {status ? "Online" : "Offline"}</p>
    </div>
  );
}
const mapStateToProps = (state) => ({
  name: state.name,
  status: state.status,
});
export default connect(mapStateToProps)(User);
