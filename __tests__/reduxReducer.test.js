import React from 'react'
import * as ActionTypes from '../redux/ActionTypes'
import { Device } from '../redux/deviceReducer'

describe(
  'device reducer',
  () => {
    const initialState = Device(undefined, {})

    it(
      'requests to initialize store',
      () => {
        const result = Device(
          initialState, ActionTypes.INITIALIZE_STORE_REQUESTED
        )

        expect(result).toEqual(
          {
            ...initialState,
            errorMessage: ''
          }
        )
      }
    )
  }
)
