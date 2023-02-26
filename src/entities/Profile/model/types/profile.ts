import { CountryEnum, CurrencyEnum } from 'shared/Constants/common';
import { ValidateProfileError } from './validate';

export interface Profile {
  firstname?: string
  lastname?: string
  age?: number
  currency?: CurrencyEnum
  country?: CountryEnum
  city?: string
  nickname?: string
  avatar?: string
}

export interface ProfileSchema {
  data?: Profile
  form?: Profile
  isLoading: boolean
  error?: string
  validateErrors?: ValidateProfileError[]
  readonly: boolean
}
