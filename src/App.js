import { useTextSelection } from './CustomSaveForSelectedText'

function App() {
	const selection = useTextSelection()

	return (
		<div className='App'>
			<span>Abu</span>
			<span>Ali</span>
			<div>{selection}</div>
		</div>
	)
}

export default App
