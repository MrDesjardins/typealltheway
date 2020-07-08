export interface Statistics {
    /**
     * Contain a list of unique URL requested by the server. If a SAME URL is requested with different parameter
     * the object will contain a sublist of parameter, hence the key (URL) does NOT contain query string.
     */
    backendRequests: BackendStatsEndpoints[];
    /**
     * Indicate if the GraphQL response got terminated before it ended. True when it reached a maximum of HTTP request.
     */
    prematureEnding: boolean;
}

export interface BackendStatsEndpoints {
    url: string;
    urlSearchParams: URLSearchParams;
    elapsedTimeMs: number;
    totalBytes: number;
}
