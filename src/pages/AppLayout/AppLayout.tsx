import Map from "./componets/Map";
import User from "./componets/User";

import styles from "./AppLayout.module.css";
import Sidebar from "./componets/Sidebar";

const AppLayout = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
};

export default AppLayout;
