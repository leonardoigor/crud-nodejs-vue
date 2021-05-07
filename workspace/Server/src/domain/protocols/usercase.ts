export interface UseCase<I, O> {
    handle(params: I): O
}
