import { useCallback, useState } from 'react'

export const useTectSelection = () => {
	const [, update] = useState()
	const forceUpdate = useCallback(() => update({}), [])
	const [slection, setSelection] = useState(null)

	const handleSelection = () => {
		setSelection(document.getSelection())
		forceUpdate()
	}
}
