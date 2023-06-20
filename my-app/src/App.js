import { useState } from 'react'
import styles from './app.module.css'

import {
	useRequestAddVacuumCleaner,
	useRequestDeleteHairDryer,
	useRequestGetProducts,
	useRequestUpdateSmartphone,
} from './hooks'

export const App = () => {
	const [refreshProductsFlag, setRefreshProductsFlag] = useState(false)
	const refreshProducts = () => setRefreshProductsFlag(!refreshProductsFlag)

	const { isLoading, products } = useRequestGetProducts()

	const { isCreating, requestAddVacuumCleaner } =
		useRequestAddVacuumCleaner(refreshProducts)

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
			<button disabled={isCreating} onClick={requestAddVacuumCleaner}>
				Добавить пылесос
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
