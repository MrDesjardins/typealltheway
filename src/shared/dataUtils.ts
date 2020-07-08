export function orderArrayPayloadWithInput<T, P>(
    inputs: readonly T[],
    responses: P[],
    predicate: (item: P, input: T) => boolean
): (P | undefined)[] {
    const orderedArray: (P | undefined)[] = [];
    inputs.forEach((input: T) => {
        const payload = responses.find((response) => predicate(response, input));
        orderedArray.push(payload); // Good if undefined as well, means we do not have a response
    });
    console.assert(inputs.length === orderedArray.length, "Returned array must be the same size of the input array", {
        inputLength: inputs.length,
        outputLength: orderedArray.length,
    });
    return orderedArray;
}
