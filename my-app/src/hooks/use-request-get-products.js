import { useEffect, useState } from 'react'
import { ref, onValue } from 'firebase/database'
import { db } from '../firebase'

export const useRequestGetProducts = () => {
	const [products, setProducts] = useState({})
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const productsDbRef = ref(db, 'products')

		return onValue(productsDbRef, (snapshot) => {
			const loadedProducts = snapshot.val() || {}

			setProducts(loadedProducts)
			setIsLoading(false)
		})
	}, [])

	return { isLoading, products }
}
