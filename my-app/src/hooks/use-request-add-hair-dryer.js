import { useState } from 'react'
import { ref, push } from 'firebase/database'
import { db } from '../firebase'

export const useRequestAddHairDryer = () => {
	const [isCreatingHairDryer, setIsCreatingHairDryer] = useState(false)

	const requestAddHairDryer = () => {
		setIsCreatingHairDryer(true)

		const productsDbRef = ref(db, 'products')

		push(productsDbRef, {
			name: 'Фен',
			price: 3200,
		})
			.then((response) => {
				console.log('Фен добавлен! Ответ сервера:', response)
			})
			.finally(() => setIsCreatingHairDryer(false))
	}

	return { isCreatingHairDryer, requestAddHairDryer }
}
