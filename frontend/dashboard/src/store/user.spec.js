import useStore from '@/hooks/useStore'
import { cleanCurrentUser, resetUserStore, setApiKey, setCurrentUser } from './user'

describe('', () => {
    let store
    beforeEach(() => {
        store = useStore()
    })
    afterEach(() => {
        resetUserStore()
    })
    it('should set current user', () => {
        setCurrentUser({ name: 'Igor' })
        expect(store.User.currentUser.name).toBe('Igor')
    })

    it('should set api_key on current user', () => {
        setApiKey('123')
        expect(store.User.currentUser.apiKey).toBe('123')
    })

    it('should clean current user', () => {
        setCurrentUser({ name: 'Igor' })
        expect(store.User.currentUser.name).toBe('Igor')
        cleanCurrentUser()
        expect(store.User.currentUser.name).toBeFalsy()
    })
})