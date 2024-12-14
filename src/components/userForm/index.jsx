import { useEffect, useState } from "react";
import { setUserInfo } from "../../redux/actions";
import { connect } from "react-redux";
import styles from "./styles.module.css";

function UserForm({ userName, userStatus, setUserInfo }) {
  const [user, setUser] = useState({ name: "", status: false });

  useEffect(() => {
    if (userName || userStatus) {
      setUser({ ...user, name: userName, status: userStatus });
    }
  }, []);

  function handleNameChange(e) {
    setUser({ ...user, name: e.target.value });
  }
  function handleStatusChange(e) {
    setUser({ ...user, status: !user.status });
  }
  function handleSubmit(e) {
    e.preventDefault();
    setUserInfo(user);
  }
  return (
    <div className={styles.form_container}>
      <h2>Edit user info</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Change Name:
          <input onChange={handleNameChange} value={user.name} type="text" />
        </label>
        <label>
          Change Online Status:
          <input
            onChange={handleStatusChange}
            checked={user.status}
            type="checkbox"
          />
        </label>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
const mapStateToProps = (state) => ({
  userName: state.name,
  userStatus: state.status,
});
const mapDispatchToProps = (dispatch) => ({
  setUserInfo: (value) => dispatch(setUserInfo(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
