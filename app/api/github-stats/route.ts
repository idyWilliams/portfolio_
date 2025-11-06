
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const query = `
      query {
        user(login: "idyWilliams") {
          contributionsCollection {
            totalCommitContributions
            restrictedContributionsCount
          }
          repositories(first: 100, ownerAffiliations: OWNER, orderBy: {field: UPDATED_AT, direction: DESC}) {
            totalCount
            nodes {
              defaultBranchRef {
                target {
                  ... on Commit {
                    history(first: 0) {
                      totalCount
                    }
                  }
                }
              }
            }
          }
        }
      }
    `;

    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    const data = await response.json();

    // Calculate total commits from all repos
    const totalCommits = data.data.user.repositories.nodes.reduce(
      (sum: number, repo: any) => {
        const count = repo.defaultBranchRef?.target?.history?.totalCount || 0;
        return sum + count;
      },
      0
    );

    const totalRepos = data.data.user.repositories.totalCount;
    const yearlyContributions =
      data.data.user.contributionsCollection.totalCommitContributions;

    return NextResponse.json({
      totalCommits,
      totalRepos,
      yearlyContributions,
    });
  } catch (error) {
    console.error("Error fetching GitHub stats:", error);
    return NextResponse.json(
      { error: "Failed to fetch GitHub stats" },
      { status: 500 }
    );
  }
}
