import { useState } from 'react'
import { ref, remove } from 'firebase/database'
import { db } from '../firebase'

export const useRequestDeleteHairDryer = () => {
	const [isDeleting, setIsDeleting] = useState(false)

	const requestDeleteHairDryer = () => {
		setIsDeleting(true)

		const hairDryerDbRef = ref(db, 'products/-NYNbOerqqe76PbJnWT2')

		remove(hairDryerDbRef)
			.then((response) => {
				console.log('Фен удалён! Ответ сервера:', response)
			})
			.finally(() => setIsDeleting(false))
	}

	return { isDeleting, requestDeleteHairDryer }
}
