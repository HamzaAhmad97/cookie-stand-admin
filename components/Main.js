import styles from "../style/index.module.css";
import CreateForm from "./CreateForm";
import { useState } from "react";
export default function Main() {
    
    return (
        <main className={"my-8 w-full" + ` ${styles.main_content}`}>
            <CreateForm />
        </main>
    );
}
