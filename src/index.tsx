import { createRoot } from 'react-dom/client'
import './scss/index.scss'
import { MainComponent } from './components/MainComponent'
import { AnotherComponent } from './components/AnotherComponent'

const PlayGround = () => {
	return (
		<div className="playground">
			<MainComponent />
			<AnotherComponent />
		</div>
	)
}

createRoot(document.getElementById('root')!).render(<PlayGround />)
