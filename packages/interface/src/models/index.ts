export interface CommonResponse<T, E> {
	data: T | null
	error: {
		code: E
		message: string
	} | null
}