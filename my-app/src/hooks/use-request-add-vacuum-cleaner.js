import { useState } from 'react'

export const useRequestAddVacuumCleaner = (
	refreshProducts,
	setRefreshProducts
) => {
	const [isCreating, setIsCreating] = useState(false)

	const requestAddVacuumCleaner = () => {
		setIsCreating(true)

		fetch('http://localhost:3005/products', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json; charset=utf-8' },
			body: JSON.stringify({
				name: 'Новый пылесос',
				price: 4690,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Пылесос добавлен! Ответ сервера:', response)
				setRefreshProducts(!refreshProducts)
			})
			.finally(() => setIsCreating(false))
	}

	return { requestAddVacuumCleaner, isCreating }
}
