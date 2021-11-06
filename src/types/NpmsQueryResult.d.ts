export interface NpmsQueryResult {
  total: number;
  results: ResultsEntity[];
}

interface ResultsEntity {
  package: Package;
  score: Score;
  searchScore: number;
}

interface Package {
  name: string;
  scope: string;
  version: string;
  description: string;
  keywords: string[];
  date: string;
  links: Links;
  author: Author;
  publisher: MaintainersEntityOrPublisher;
  maintainers: MaintainersEntityOrPublisher[];
}

interface Links {
  npm: string;
  homepage: string;
  repository: string;
  bugs: string;
}

interface Author {
  name: string;
  email: string;
  url: string;
}

interface MaintainersEntityOrPublisher {
  username: string;
  email: string;
}

interface Score {
  final: number;
  detail: Detail;
}

interface Detail {
  quality: number;
  popularity: number;
  maintenance: number;
}
