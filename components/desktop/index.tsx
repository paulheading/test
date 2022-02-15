import styles from 'styles/desktop.module.scss'
import { useEffect, useRef } from 'react'
import { useSelector } from 'hooks'
import { Credit, Folder, Topbar, Theme } from 'components/desktop'
import Spotify from 'components/desktop/windows/spotify'
import Trello from 'components/desktop/windows/trello'
import { Draggable } from 'gsap/dist/Draggable'
import gsap from 'gsap'

export const Desktop: React.FC = () => {
  const windows = useRef<HTMLDivElement>(null);
  const trello = {
    ref: useRef<HTMLDivElement>(null),
    className: styles.trello,
    id: "trello"
  }
  const spotify_2020 = {
    content: useSelector(({ spotify }) => spotify).data._2020,
    ref: useRef<HTMLDivElement>(null),
    className: styles.spotify_2020,
    closed: true
  }
  const spotify_2021 = {
    content: useSelector(({ spotify }) => spotify).data._2021,
    ref: useRef<HTMLDivElement>(null),
    className: styles.spotify_2021,
  }
  const gem = {
    content: useSelector(({ gem }) => gem),
    className: styles.gem,
    color: "#007bff",
  }
  const npm = {
    content: useSelector(({ npm }) => npm),
    className: styles.npm,
    color: "#dc3545",
  }

  useEffect(() => {    
    if (windows.current) {
      gsap.registerPlugin(Draggable);
      const { children } = windows.current;
      Array.from(children).forEach(child => Draggable.create(child));
    }
  },[windows]);
    
  return (
    <div className={styles.container}>
      <Topbar />
      <div className={styles.canvas}>
        <div className={styles.wrap}>
          <div ref={windows} className={styles.windows}>
            <Theme {...npm} />
            <Theme {...gem} />
            <Trello {...trello} />
            <Spotify {...spotify_2021} />
            <Spotify {...spotify_2020} />
          </div>
          <div className={styles.folders} id="folders">
            <Folder target={spotify_2020.ref.current} closed>
              spotify 2020
            </Folder>
            <Folder target={spotify_2021.ref.current}>
              spotify 2021
            </Folder>
            <Folder target={trello.ref.current}>
              trello
            </Folder>
          </div>
        </div>
        <Credit />
      </div>
    </div>
  )
}

export * from './topbar'
export * from './theme'
export * from './folder'
export * from './credit'