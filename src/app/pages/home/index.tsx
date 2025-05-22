'use client'
import * as styles from './styles'
import { localize } from "@/app/locales/localize";
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
      <div
        style={{
          ...theme.typography.label,
          color: theme.colors.blue
        }}
      >
        {localize("subtitle")}
      </div>
    </div>
  )
}
