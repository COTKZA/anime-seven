export interface categorys {
    id: number;
    name: string;
}

export interface tags {
    id: number;
    name: string;
}

export interface dashboardStatus {
    user: number;
    category: number;
    tags: number;
    story: number;
    episodes: number;
}

export interface storys {
    id: number;
    title: string;
    cover_image: string;
    description: string;
    category_id: string;
    status: string;
}