import { ReactNode } from "react";
import styles from "./layout.module.css";

export default function AuthenticationLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className={styles['layout-container']}>
      {children}
    </main>
  );
}
