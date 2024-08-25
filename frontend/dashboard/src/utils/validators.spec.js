/* eslint-disable */
import { validateEmptyAndLength3, validateEmptyAndEmail } from './validators'

describe('Validators utils', () => {
    it('should give an error with empty payload', () => {
      expect(validateEmptyAndLength3()).toBe('*Este campo é obrigatório')
    })

    it('should give an erros with less the 3 character payload', () => {
        expect(validateEmptyAndLength3('12')).toBe('*Este campo precisa de no mínimo 3 caracteres')
    })

    it('should returns true when input pass a correct param', () => {
        expect(validateEmptyAndLength3('1234')).toBe(true)
    })

    it('should give an error with empty payload', () => {
        expect(validateEmptyAndEmail()).toBe('*Este campo é obrigatório')
    })

    it('should give an erro with a invalid email param', () => {
        expect(validateEmptyAndEmail('teste.gmail')).toBe('*Este campo precisa ser um e-mail')
    })

    it('should returns true when input be a correct param', () => {
        expect(validateEmptyAndEmail('teste@gmail.com')).toBe(true)
    })
})
