import { Validation } from "../protocols";
import { InvalidParamError } from './../errors'





export class HasId implements Validation {
    validate(input: any): Error {

        if (input.id === undefined) {

            return new InvalidParamError('id')
        }

    }
}