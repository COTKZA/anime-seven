export interface categorys {
    id: number,
    name: string,
}

export interface tags {
    id: number,
    name: string,
}

export interface dashboardStatus {
    user: number,
    category: number,
    tags: number,
    story: number,
    episodes: number,
}