import { createWideHook } from 'widehook'

export const useWideMessage = createWideHook({
	initState: 'Click' as 'One Value' | 'Another',
	mode: 'signal',
})
