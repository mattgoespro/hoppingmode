export interface ApiRepositoryResponseDTO {
  name: string;
  description: string;
  createdTimestamp: string;
  updatedTimestamp: string;
  link: string;
}

export interface GithubRepositoryLanguageResponseDTO {
  languages: { [key: string]: number };
}

export interface HttpErrorResponse {
  status: number;
  message: string;
}

export interface GithubApiRestErrorResponse {
  response: {
    status: number;
    statusText: string;
  };
}
export interface GithubRepositoryResponseDTO {
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
  html_url: string;
}

export interface GithubGqlResponseDTO {
  mattgoespro: {
    projects: {
      pinned: ApiRepositoryResponseDTO[];
    };
  };
}

export interface ApiRepositoryResponseDTO {
  name: string;
  description: string;
  createdTimestamp: string;
  updatedTimestamp: string;
  link: string;
}

export interface GithubRepositoryLanguageResponseDTO {
  languages: { [key: string]: number };
}

export interface HttpErrorResponse {
  status: number;
  message: string;
}

export interface GithubApiRestErrorResponse {
  response: {
    status: number;
    statusText: string;
  };
}
