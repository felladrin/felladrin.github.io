import React, { useState, useEffect } from "react";

export function NpmPackages() {
  const [npmsQueryResult, setNpmsQueryResult] = useState<NpmsQueryResult | null>(null);

  useEffect(() => {
    fetch("https://api.npms.io/v2/search?q=maintainer%3Afelladrin")
      .then<NpmsQueryResult>((response) => response.json())
      .then(setNpmsQueryResult);
  }, []);

  return npmsQueryResult ? (
    <div className="card">
      <h2 className="card-title">NPM Packages</h2>
      <table className="table table-hover">
        <tbody>
          {npmsQueryResult.results.map((result) => (
            <tr key={result.package.name}>
              <td style={{ whiteSpace: "nowrap" }}>
                <a href={result.package.links.npm} target="_blank">
                  {result.package.name}
                </a>
              </td>
              <td>{result.package.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : null;
}

interface NpmsQueryResult {
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
