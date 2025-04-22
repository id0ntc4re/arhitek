'use client'
import React, { useState } from 'react'
import axios from 'axios'
import './Quiz.scss' 

function Quiz() {
	const cyrillicPattern = /^[\u0400-\u04FF\s]+$/
	const phonePattern = /^(8|7|\+7)\d{10}$/
	const [sentNumbers, setSentNumbers] = useState([])
	const [step, setStep] = useState(1)
	const [answers, setAnswers] = useState({
		q1: '',
		q2: '',
		q4: '',
	})
	const [contactInfo, setContactInfo] = useState({
		name: '',
		phone: '',
		len: '',
		width: '',
	})
	const [isLoading, setIsLoading] = useState(false)

	const handleAnswerChange = e => {
		setAnswers({ ...answers, [e.target.name]: e.target.value })
	}

	const handleContactChange = e => {
		setContactInfo({ ...contactInfo, [e.target.name]: e.target.value })
	}

	const handleNextStep = () => {
		setStep(step + 1)
	}

	const handlePrewStep = () => {
		setStep(step - 1)
	}

	const handleSubmit = async e => {
		e.preventDefault()
		ym(98007197, 'reachGoal', 'Quiz')
		if (cyrillicPattern.test(contactInfo.name) == 1) {
			if (phonePattern.test(contactInfo.tel)) {
				if (!sentNumbers.includes(contactInfo.tel)) {
					setSentNumbers([...sentNumbers, contactInfo.tel])

					const email =
						contactInfo.email && contactInfo.email.trim() !== ''
							? contactInfo.email
							: 'Не указан'

					const message = `
						<b>Заявка с сайта!</b>\n\n
						<b>Имя:</b> ${contactInfo.name}\n
						<b>Email:</b> ${email}\n
						<b>Телефон:</b> ${contactInfo.tel}\n
						<b>Материал:</b> ${answers.q1}\n
						<b>Этажи:</b> ${answers.q2}\n
						<b>Размеры:</b> Длина: ${contactInfo.len} м, Ширина: ${contactInfo.width} м\n
						<b>Дата начала строительства:</b> ${answers.q4}
					`

					try {
						const CHAT_ID = '-4219352649'
						// const CHAT_ID = "1099361916";
						const URI_API =
							'https://api.telegram.org/bot7002695507:AAGsPui11bBUz3I2nsHbUULw_9MG7XZ-dK4/sendMessage'

						await axios.post(URI_API, {
							chat_id: CHAT_ID,
							parse_mode: 'html',
							text: message,
						})

						const formData = {
							fullName: contactInfo.name,
							email: email,
							phone: contactInfo.tel,
							material: answers.q1,
							floors: answers.q2,
							dimensions: {
								length: contactInfo.len,
								width: contactInfo.width,
							},
							constructionDate: contactInfo.q4,
						}

						
						const response = await fetch(
							'https://arhitek42.ru/send-email.php',
							{
								method: 'POST',
								headers: {
									'Content-Type': 'application/json',
								},
								body: JSON.stringify(formData),
							}
						)

						if (response.ok) {
							alert('Данные успешно отправлены! Вскоре мы с Вами свяжемся.')
							window.location.href = '/'
						}
					} catch (error) {
						console.error(error)
						alert('Ошибка при отправке данных. Попробуйте позже.')
					}
				} else {
					alert('Заявка уже отправлена!')
				}
			} else {
				alert('Напишите корректный номер телефона.')
			}
		} else {
			alert('Напишите имя на русском.')
		}
	}

	return (
		<div className='App'>
			<div className='quiz-container'>
				<h2 className='quiz-title'>Расчет стоимости строительства дома</h2>
				{step === 1 && (
					<div className='quiz-step'>
						<h3 className='quiz-question'>
							По какой технологии вы хотите построить дом?
						</h3>
						<div
							className='quiz-options '
							style={{ justifyContent: 'center', textAlign: 'center' }}
						>
							<label
								className={`quiz-option ${answers.q1 === 'Брус' ? 'selected' : ''}`}
							>
								<input
									type='radio'
									name='q1'
									value='Брус'
									checked={answers.q1 === 'Брус'}
									onChange={handleAnswerChange}
								/>
								<img src='./QuizEVG/Брус.webp' alt='' className='quiz-image' />

								<span className='image-label'>Брус</span>
							</label>
							<label
								className={`quiz-option ${answers.q1 === 'Клееный брус' ? 'selected' : ''}`}
							>
								<input
									type='radio'
									name='q1'
									value='Клееный брус'
									checked={answers.q1 === 'Клееный брус'}
									onChange={handleAnswerChange}
								/>
								<img src='./QuizEVG/Клееный-брус.webp' alt='' className='quiz-image' />

								<span className='image-label'>Клееный брус</span>
							</label>
							<label
								className={`quiz-option ${answers.q1 === 'Газобетон' ? 'selected' : ''}`}
							>
								<input
									type='radio'
									name='q1'
									value='Газобетон'
									checked={answers.q1 === 'Газобетон'}
									onChange={handleAnswerChange}
								/>
								<img src='./QuizEVG/Газобетон.webp' alt='' className='quiz-image' />

								<span className='image-label'>Газобетон</span>
							</label>
							<label
								className={`quiz-option ${answers.q1 === 'Кирпич' ? 'selected' : ''}`}
							>
								<input
									type='radio'
									name='q1'
									value='Кирпич'
									checked={answers.q1 === 'Кирпич'}
									onChange={handleAnswerChange}
								/>
								<img src='./QuizEVG/Кирпичный.webp' alt='' className='quiz-image' />

								<span className='image-label'>Кирпич</span>
							</label>
							<label
								className={`quiz-option sbjzbeton ${answers.q1 === 'Сборно-монолитный железобетон' ? 'selected' : ''}`}
							>
								<input
									type='radio'
									name='q1'
									value='Сборно-монолитный железобетон'
									checked={answers.q1 === 'Сборно-монолитный железобетон'}
									onChange={handleAnswerChange}
								/>

								<img
									src='./QuizEVG/Сборно-монолитный.webp'
									alt=''
									className='quiz-image'
								/>
								<span className='image-label'>
									Сборно-монолитный железобетон
								</span>
							</label>
							<label
								className={`quiz-option ${answers.q1 === 'Фахверковая технология' ? 'selected' : ''}`}
							>
								<input
									type='radio'
									name='q1'
									value='Фахверковая технология'
									checked={answers.q1 === 'Фахверковая технология'}
									onChange={handleAnswerChange}
								/>
								<img
									src='./QuizEVG/Фахверковая-технология.webp'
									className='quiz-image'
								></img>
								<span className='image-label'>Фахверковая технология</span>
							</label>
						</div>

						<div className='quiz-buttons'>
							<button
								className='quiz-button left'
								onClick={handlePrewStep}
								disabled='true'
							>
								Назад
							</button>
							<button className='quiz-button right' onClick={handleNextStep}>
								Далее
							</button>
						</div>
					</div>
				)}

				{step === 2 && (
					<div className='quiz-step step-three'>
						<h3 className='quiz-question'>Количество этажей</h3>
						<div className='quiz-options-three'>
							<label className='quiz-option'>
								<input
									type='radio'
									name='q2'
									value='1 Этаж'
									checked={answers.q2 === '1 Этаж'}
									onChange={handleAnswerChange}
								/>
								<span className='custom-radio'></span>1 Этаж
							</label>
							<label className='quiz-option'>
								<input
									type='radio'
									name='q2'
									value='2 Этажа'
									checked={answers.q2 === '2 Этажа'}
									onChange={handleAnswerChange}
								/>
								<span className='custom-radio'></span>2 Этажа
							</label>
							<label className='quiz-option'>
								<input
									type='radio'
									name='q2'
									value='2 Этажа (второй мансардный этаж)'
									checked={answers.q2 === '2 Этажа (второй мансардный этаж)'}
									onChange={handleAnswerChange}
								/>
								<span className='custom-radio'></span>2 Этажа (второй мансардный
								этаж)
							</label>
							<label className='quiz-option'>
								<input
									type='radio'
									name='q2'
									value='С цокольным этажом'
									checked={answers.q2 === 'С цокольным этажом'}
									onChange={handleAnswerChange}
								/>
								<span className='custom-radio'></span>С цокольным этажом
							</label>
							<label className='quiz-option'>
								<input
									type='radio'
									name='q2'
									value='Без цокольного этажа'
									checked={answers.q2 === 'Без цокольного этажа'}
									onChange={handleAnswerChange}
								/>
								<span className='custom-radio'></span>
								Без цокольного этажа
							</label>
						</div>

						<div className='quiz-buttons'>
							<button className='quiz-button left' onClick={handlePrewStep}>
								Назад
							</button>
							<button className='quiz-button right' onClick={handleNextStep}>
								Далее
							</button>
						</div>
					</div>
				)}

				{step === 3 && (
					<div className='quiz-step five'>
						<h3 className='quiz-question'>Укажите размеры дома (м)</h3>
						<label className='quiz-option'>
							<input
								type='text'
								name='len'
								value={contactInfo.len}
								onChange={handleContactChange}
								placeholder='Длина, м'
								required
							/>
						</label>
						<label className='quiz-option'>
							<input
								type='text'
								name='width'
								value={contactInfo.width}
								onChange={handleContactChange}
								placeholder='Ширина, м'
								required
							/>
						</label>
						<div className='quiz-buttons'>
							<button className='quiz-button left' onClick={handlePrewStep}>
								Назад
							</button>
							<button className='quiz-button right' onClick={handleNextStep}>
								Далее
							</button>
						</div>
					</div>
				)}

				{step === 4 && (
					<div className='quiz-step step-three'>
						<h3 className='quiz-question'>
							Когда планируете начать строительство?
						</h3>
						<div className='quiz-options-three'>
							<label className='quiz-option'>
								<input
									type='radio'
									name='q4'
									value='В этом месяце'
									checked={answers.q4 === 'В этом месяце'}
									onChange={handleAnswerChange}
								/>
								<span className='custom-radio'></span>В этом месяце
							</label>
							<label className='quiz-option'>
								<input
									type='radio'
									name='q4'
									value='Через месяц'
									checked={answers.q4 === 'Через месяц'}
									onChange={handleAnswerChange}
								/>
								<span className='custom-radio'></span>
								Через месяц
							</label>
							<label className='quiz-option'>
								<input
									type='radio'
									name='q4'
									value='Через несколько месяцев'
									checked={answers.q4 === 'Через несколько месяцев'}
									onChange={handleAnswerChange}
								/>
								<span className='custom-radio'></span>
								Через несколько месяцев
							</label>
							<label className='quiz-option'>
								<input
									type='radio'
									name='q4'
									value='В следующем году'
									checked={answers.q4 === 'В следующем году'}
									onChange={handleAnswerChange}
								/>
								<span className='custom-radio'></span>В следующем году
							</label>
						</div>

						<div className='quiz-buttons'>
							<button className='quiz-button left' onClick={handlePrewStep}>
								Назад
							</button>
							<button className='quiz-button right' onClick={handleNextStep}>
								Далее
							</button>
						</div>
					</div>
				)}
				{step === 5 && (
					<div className='quiz-step five'>
						<h3 className='quiz-question'>
							Укажите ваш номер телефона, чтобы мы могли выслать расчет. Это
							бесплатно.
						</h3>
						<form onSubmit={handleSubmit} className='quiz-form'>
							<label className='quiz-option'>
								<input
									type='text'
									name='name'
									value={contactInfo.name}
									onChange={handleContactChange}
									placeholder='Имя'
									required
								/>
							</label>
							<label className='quiz-option'>
								<input
									type='text'
									name='tel'
									value={contactInfo.tel}
									onChange={handleContactChange}
									placeholder='Телефон'
									required
								/>
							</label>
							<br />
							<h3 className='quiz-question'>
								Ваши данные не передаются третьим лицам
							</h3>
							<div className='quiz-buttons'>
								<button className='quiz-button left' onClick={handlePrewStep}>
									Назад
								</button>
								<button
									style={
										isLoading || !contactInfo.name || !contactInfo.tel
											? { background: 'gray', cursor: 'not-allowed' } 
											: { background: '#D2B48C', cursor: 'pointer' }
									}
									className='quiz-button right'
									type='submit'
									disabled={isLoading || !contactInfo.name || !contactInfo.tel}
								>
									ОТПРАВИТЬ
								</button>
							</div>
						</form>
					</div>
				)}
			</div>
		</div>
	)
}

export default Quiz
