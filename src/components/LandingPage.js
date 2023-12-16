import React from 'react'
import { useDispatch } from 'react-redux'
import { addKeyWord } from '../redux/keyWordReducer'
import { addFormData } from '../redux/formDataReducer'

const LandingPage = () => {
  const dispatch = useDispatch()

  const handleAmazingClick = (word) => {
    dispatch(addKeyWord(word))
    dispatch(addFormData(word))
  }

  return (
        <div className="landing-page-container">
            <h2>Hello | Welcome | hi | howdy</h2>
            <p>Type any word above and hit search !</p>
            <p>You can start your search with the word
                <span className="synonym-span"
                onClick={() => handleAmazingClick('amazing')}> AMAZING</span>,<br/> because you
            are an amazing person for using my app!</p>
        </div>
  )
}

export default LandingPage
