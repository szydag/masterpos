'use client'
import * as styles from './styles'
import { localize } from "@/app/types/localize";
import { useTheme } from "@/app/themes/useTheme";

export default function Home() {
  const theme = useTheme();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}
          style={{
            color: theme.colors.blue
          }}
      >
        {localize("title")}
      </h1>
      <h2
        style={{
          color: theme.colors.blue
        }}
      >
        {localize("subtitle")}
      </h2>
    </div>
  )
}
