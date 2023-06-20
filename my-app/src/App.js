import { useState } from 'react'
import styles from './app.module.css'

import {
	useRequestAddVacuumCleaner,
	useRequestAddHairDryer,
	useRequestDeleteHairDryer,
	useRequestGetProducts,
	useRequestUpdateSmartphone,
} from './hooks'

export const App = () => {
	const [refreshProductsFlag, setRefreshProductsFlag] = useState(false)
	const refreshProducts = () => setRefreshProductsFlag(!refreshProductsFlag)

	const { isLoading, products } = useRequestGetProducts()

	const { isCreatingVacuumCleaner, requestAddVacuumCleaner } =
		useRequestAddVacuumCleaner(refreshProducts)

	const { isCreatingHairDryer, requestAddHairDryer } =
		useRequestAddHairDryer(refreshProducts)

	const { isUpdating, requestUpdateSmartphone } =
		useRequestUpdateSmartphone(refreshProducts)

	const { isDeleting, requestDeleteHairDryer } =
		useRequestDeleteHairDryer(refreshProducts)

	return (
		<div className={styles.app}>
			{isLoading ? (
				<div className={styles.loader}></div>
			) : (
				Object.entries(products).map(([id, { name, price }]) => (
					<div key={id}>
						{name} - {price} руб
					</div>
				))
			)}
			<button
				disabled={isCreatingVacuumCleaner}
				onClick={requestAddVacuumCleaner}
			>
				Добавить пылесос
			</button>
			<button disabled={isCreatingHairDryer} onClick={requestAddHairDryer}>
				Добавить фен
			</button>
			<button disabled={isUpdating} onClick={requestUpdateSmartphone}>
				Обновить смартфон
			</button>
			<button disabled={isDeleting} onClick={requestDeleteHairDryer}>
				Удалить фен
			</button>
		</div>
	)
}
