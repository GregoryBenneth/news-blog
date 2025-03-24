import * as prismic from "@prismicio/client"

const repositoryName = process.env.PRISMIC_REPOSITORY_NAME || "your-repo-name"
const accessToken = process.env.PRISMIC_ACCESS_TOKEN

export const createClient = () => {
  const client = prismic.createClient(repositoryName, {
    accessToken,
    fetchOptions: {
      next: { tags: ["prismic"] },
      cache: "force-cache",
    },
  })

  return client
}

export async function getHomepageData() {
  const client = createClient()

  const homepage = await client.getSingle("homepage")
  const featuredArticles = await client.getAllByType("article", {
    predicates: [prismic.predicate.at("document.tags", ["featured"])],
    orderings: {
      field: "document.first_publication_date",
      direction: "desc",
    },
    limit: 5,
  })

  const latestArticles = await client.getAllByType("article", {
    orderings: {
      field: "document.first_publication_date",
      direction: "desc",
    },
    limit: 10,
  })

  return {
    homepage,
    featuredArticles,
    latestArticles,
  }
}

export async function getArticleByUID(uid: string) {
  const client = createClient()

  const article = await client.getByUID("article", uid)

  return article
}

export async function getArticlesByCategory(category: string) {
  const client = createClient()

  const articles = await client.getAllByType("article", {
    predicates: [prismic.predicate.at("my.article.category", category)],
    orderings: {
      field: "document.first_publication_date",
      direction: "desc",
    },
  })

  return articles
}

