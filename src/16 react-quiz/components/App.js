import React, { useEffect, useReducer } from 'react';
import '../style.css';
import Header from './Header';
import Main from './Main';
import Error from './Error';
import Loader from './Loader';
import StartScreen from './StartScreen';
import Question from './Question';
import NextButton from './NextButton';
import Progress from './Progress';
import FinishedScreen from './FinishedScreen';
import Footer from './Footer';
import Time from './Time';
const initialState = {
  question: [],

  // isLoading, 'error', 'ready', 'active, 'failed', 'finished';
  status: 'loading',
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondRemaining: 0,
};
const SECS_PER_QUESTION = 30;
function reducer(state, active) {
  switch (active.type) {
    case 'dataReceived':
      return {
        ...state,
        question: active.payload,
        status: 'ready',
      };
    case 'dataFailed':
      return {
        ...state,
        status: 'Error',
      };
    case 'start':
      return {
        ...state,
        status: 'active',
        secondRemaining: state.question.length * SECS_PER_QUESTION,
      };
    case 'newAnswer':
      return {
        ...state,
        answer: active.payload,
        points:
          active.payload === state.question.at(state.index).correctOption
            ? state.points + 1
            : state.points,
      };
    case 'nextQuestion':
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case 'finish':
      return {
        ...state,
        status: 'finish',
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case 'restart':
      return {
        ...initialState,
        highscore: state.highscore,
        question: state.question,
        status: 'ready',
      };
    case 'time':
      return {
        ...state,
        secondRemaining: state.secondRemaining - 1,
        status: state.secondRemaining === 0 ? 'finish' : state.status,
      };
    default:
      throw new Error('Unknown Action');
  }
}
export default function App() {
  const [
    { question, status, index, answer, points, highscore, secondRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);
  // const [question, status] = state;

  const NumQuestions = question.length;
  const maxPossiblePoints = question.reduce((acc, el) => acc + el.points, 0);
  useEffect(() => {
    fetch('http://localhost:9000/questions')
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'dataReceived', payload: data }))
      .catch((err) => dispatch({ type: 'dataFailed' }));
  }, []);

  return (
    <div className='app'>
      <Header />
      <Main>
        {status === 'loading' && <Loader />}
        {status === 'Error' && <Error />}
        {status === 'ready' && (
          <StartScreen NumQuestions={NumQuestions} dispatch={dispatch} />
        )}
        {status === 'active' && (
          <>
            <Progress
              index={index}
              NumQuestions={NumQuestions}
              points={points}
              maxPossiblePoints={maxPossiblePoints}
              answer={answer}
            />
            <Question
              question={question[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <Footer>
              <Time dispatch={dispatch} secondRemaining={secondRemaining} />
              <NextButton
                dispatch={dispatch}
                answer={answer}
                NumQuestions={NumQuestions}
                index={index}
              />
            </Footer>
          </>
        )}
        {status === 'finish' && (
          <FinishedScreen
            points={points}
            maxPossiblePoints={maxPossiblePoints}
            highscore={highscore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}
