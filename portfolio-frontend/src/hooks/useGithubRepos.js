import { useEffect, useMemo, useState } from "react";
import { projects } from "../data/profile.js";

const repoApiUrl = "https://api.github.com/users/pra-neupane01/repos?sort=updated&per_page=100";

const formatDate = (value) => {
  if (!value) return "Recently";

  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
};

export function useGithubRepos() {
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const controller = new AbortController();

    async function loadRepos() {
      try {
        const response = await fetch(repoApiUrl, { signal: controller.signal });

        if (!response.ok) {
          throw new Error("GitHub request failed");
        }

        const data = await response.json();
        setRepos(data);
        setStatus("ready");
      } catch (error) {
        if (error.name !== "AbortError") {
          setStatus("fallback");
        }
      }
    }

    loadRepos();
    return () => controller.abort();
  }, []);

  const enrichedProjects = useMemo(() => {
    return projects.map((project) => {
      const repo = repos.find(
        (item) => item.name.toLowerCase() === project.repoName.toLowerCase(),
      );

      return {
        ...project,
        liveLanguage: repo?.language || project.stack[0],
        stars: repo?.stargazers_count ?? 0,
        forks: repo?.forks_count ?? 0,
        updatedAt: formatDate(repo?.updated_at),
        liveDescription: repo?.description || project.description,
      };
    });
  }, [repos]);

  return {
    projects: enrichedProjects,
    repos,
    status,
  };
}
