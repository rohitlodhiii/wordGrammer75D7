import React from 'react'
import SpeechType from './SpeechType'
import Loading from './Loading'
import playIcon from '../assets/images/icon-play.svg'
import playIconHover from '../assets/images/icon-play-hover.svg'
import newWindow from '../assets/images/icon-new-window.svg'

import { useSelector } from 'react-redux'

const Content = () => {
  const {
    theme,
    status,
    wordDetails
  } = useSelector(state => state)

  const play = () => {
    const audio = document.getElementById('audio')
    audio.play()
  }

  const partOfSpeech = wordDetails?.meanings.map((speech, idx) => {
    return speech.partOfSpeech && <SpeechType
        key={idx}
        {...speech}
        />
  })

  const audioArr = wordDetails?.phonetics.filter((audio) => {
    return audio.audio !== ''
  }) || null

  const audioSrc = audioArr !== null && audioArr.length > 0
    ? audioArr[0].audio
    : ''

  if (status === 'submitting') {
    return <Loading />
  }

  return (
        <section>
            <div className="keyword-container">
                <div className="word">
                    <h1>{wordDetails?.word}</h1>
                    <p>{wordDetails?.phonetic}</p>
                </div>
                <div className="img-container">
                    <img src={playIcon} alt="play-icon"
                        className="play-icon"
                        onClick={play}
                    />
                    <img src={playIconHover}
                        alt="play-icon"
                        className="play-icon-hover"
                        onClick={play}
                    />
                </div>
                <audio id="audio" src={audioSrc}></audio>
            </div>
            {partOfSpeech}
            <div className={`
            source-container ${theme.darkMode ? 'source-container-dark' : ''}`}>
                <p className="source">Source</p>
                <a id="source-link" className={`
                    source-link ${theme.darkMode ? 'dark-source-link' : ''}`}
                    target="_blank"
                    rel="noreferrer"
                    href={`https://en.wiktionary.org/wiki/${wordDetails?.word}`}
                    >https://en.wiktionary.org/wiki/{wordDetails?.word}</a>
                <a href={`https://en.wiktionary.org/wiki/${wordDetails?.word}`}
                    target="_blank" rel="noreferrer">
                    <img src={newWindow} alt="" className="new-window" />
                </a>
            </div>
        </section>
  )
}

export default Content
