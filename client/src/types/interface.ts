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

export interface storyepisode {
  title: string;
  cover_image: string;
  description: string;
  status: string;
  language: string;
  category: {
    name: string;
  };
  tags: {
    name: string;
  }[];
  episodes_count: string;
}

export interface storytags {
  title: string;
  tags: {
    name: string;
  }[];
}

export interface storytagid {
  name: string;
  StoryTag: {
    id: number;
  };
}

export interface selecttags {
  id: number;
  name: string;
}