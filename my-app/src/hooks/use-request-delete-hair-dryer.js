import { useState } from 'react'

export const useRequestDeleteHairDryer = (
	refreshProducts,
	setRefreshProducts
) => {
	const [isDeleting, setIsDeleting] = useState(false)

	const requestDeleteHairDryer = () => {
		setIsDeleting(true)

		fetch('http://localhost:3005/products/003', {
			method: 'DELETE',
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Фен удалён! Ответ сервера:', response)
				setRefreshProducts(!refreshProducts)
			})
			.finally(() => setIsDeleting(false))
	}

	return { requestDeleteHairDryer, isDeleting }
}
