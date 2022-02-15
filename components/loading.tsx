import styles from 'styles/loading.module.scss'
import parse from 'html-react-parser'

interface Loading {
  lines: number[]
}

const printLines = (lines:number[]) => {
  let output = "";
  lines.forEach(line => output += `<div style="width: ${line * 100}%">line</div>`)
  return output;
}

export const Loading: React.FC<Loading> = ({ lines }) => {  
  return <div className={styles.loading}>{parse(printLines(lines))}</div>;
}