import { IconButtonProps } from '@mui/material';

export interface GithubReadme {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: string;
  type: string;
  content: string;
  encoding: string;
  _links: Links;
}

export interface Links {
  self: string;
  git: string;
  html: string;
}

export interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
  label: string;
}
