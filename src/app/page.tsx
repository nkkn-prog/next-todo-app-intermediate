"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

// ここから定数
const topPageTitle = 'Todoを作りましょう'
const createTodoTitle = 'ログインしてTodoを作成する'
const topPageDescription1 = 'Todoをつけることで頭の中が整理され、優先順位が明確になります。'
const topPageDescription2 = 'タスクの進捗が可視化され、期限管理もしやすくなります。'
const topPageDescription3 = 'また重要な作業の見落としを防ぎ、達成感も得られやすくなるため、効率的な仕事につながります。'
const topPageDescription4 = 'TODOリストは仕事の整理術の基本です。タスクを書き出すことで優先順位が見え、締め切り管理も楽になります。進捗も一目瞭然で、効率的な仕事を実現できます。'
const topPageDescription5 = '頭の中のやることを全てTODOリストに書き出しましょう。タスクの整理ができ、何から始めればいいかが分かります。期限管理もでき、仕事の質も上がります。'


export default function Home() {

  const router = useRouter();

  return (
    <div className={styles.container}>
      <div>
        <Image
          src='/notebook.png'
          alt='notebook'
          width={357}
          height={445}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>
          <p>{topPageTitle}</p>
        </div>
        <div className={styles.description}>
          <p>{topPageDescription1}</p>
          <p>{topPageDescription2}</p>
          <p>{topPageDescription3}</p>
          <p>{topPageDescription4}</p>
          <p>{topPageDescription5}</p>
        </div>
        <button className={styles.btn} onClick={() => router.push('/login')}>{createTodoTitle}</button>
      </div>
    </div>
  );
}
