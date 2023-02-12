import { useCallback, useEffect, useState } from 'react'

export const useTectSelection = () => {
	const [, update] = useState()
	const forceUpdate = useCallback(() => update({}), [])
	const [selection, setSelection] = useState(null)

	const handleSelection = () => {
		setSelection(document.getSelection())
		forceUpdate()
	}

	useEffect(() => {
		setSelection(document.getSelection())
		document.addEventListener('selectionchange', handleSelection)
		return () => {
			document.removeEventListener('selectionchange', handleSelection)
		}
	}, [])

	return String(selection)
}
