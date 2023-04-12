import {useState} from 'react'
import {test} from '../data'
import {totalAdvice} from '../data'
 
const Questions = () => {

  const [index, setIndex] = useState(0);
  const {isShown, question, answers} = test[index];
  const [list, setList] = useState('ДаДа');
  const [explanation, setExplonation] = useState(true);

  let answer = totalAdvice.find(item => item.order.join('') === list);

  if (answer !== undefined) {console.log(answer.advice)}
    console.log(answer)
  
  const changeExplanation = () => {
    setExplonation(prev => !prev);
  }

  const useNextQuestionHandler0 = () => {

    setIndex(prev => prev + 1);

    if (index > 1) {
      setList(prev => prev + answers[0])
    }

  }

  const useNextQuestionHandler1 = () => {

    setIndex(prev => prev + 1);

    if (index > 1) {
      setList(prev => prev + answers[1])
    }

  }

  if (explanation) { return (
    <div>
      <section>
        <div className='program'>"Подбор системы тестирования"</div>
        <div className='explanation__text'>
          <p>Чтобы подобрать наиболее подходящую для вас систему тестирования сначала вам придется пройти небольшой тест.</p>
          <p>Чтобы начать нажмите кнопку "Начать"</p>
          <button onClick={changeExplanation}>Начать</button>
        </div>
      </section>
    </div>
  )}
  else if (isShown && (answer === undefined)) {return (
    <section>
      <div className='program'>"Подбор системы тестирования"</div>
      <div className='test__question'>{question}</div>
      <div className='testimonials__btn-container'>
        <button className='test__btn' onClick={useNextQuestionHandler0}>{answers[0]}</button>
        <button className='test__btn' onClick={useNextQuestionHandler1}>{answers[1]}</button>
      </div>
    </section>
    )}
  else {return (
    <section>
      <div className='program'>"Подбор системы тестирования"</div>
      <div className='total'>Наиболее подходящяя вашим запросам система тестирования: {answer.advice}</div>
      <a href={answer.download} target="_blank" rel='noreferrer noopener'>Оффициальный ресурс</a>
    </section>
  )}
  
}

export default Questions