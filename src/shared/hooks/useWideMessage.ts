import { createWideHook } from 'widehook'

export const useWideMessage = createWideHook({
	init: 'Click' as 'One Value' | 'Another',
})
