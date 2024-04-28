import {Home} from "@/components/Home/Home";
import {About2} from "@/components/About/About2";
import {HomeBody} from "@/components/Home/HomeBody";
import {AboutBody} from "@/components/About/AboutBody";
import styles from '../../app/page.module.scss';
export const Body = () => {
    return (
        <div className={styles.body}>
            <HomeBody />
            <AboutBody />
        </div>
    );
}