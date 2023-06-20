import { useState } from 'react'
import { ref, push } from 'firebase/database'
import { db } from '../firebase'

export const useRequestAddVacuumCleaner = () => {
	const [isCreatingVacuumCleaner, setIsCreatingVacuumCleaner] = useState(false)

	const requestAddVacuumCleaner = () => {
		setIsCreatingVacuumCleaner(true)

		const productsDbRef = ref(db, 'products')

		push(productsDbRef, {
			name: 'Новый пылесос',
			price: 5990,
		})
			.then((response) => {
				console.log('Пылесос добавлен! Ответ сервера:', response)
			})
			.finally(() => setIsCreatingVacuumCleaner(false))
	}

	return { isCreatingVacuumCleaner, requestAddVacuumCleaner }
}
