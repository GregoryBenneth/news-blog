import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CalendarIcon, Clock, Share2 } from "lucide-react"

// This would normally come from your CMS based on the ID
const getArticleData = (id: string) => {
  return {
    id,
    title: "Global Summit Addresses Climate Change Challenges",
    content: `
      <p>World leaders gathered yesterday at the International Climate Summit to discuss urgent measures against rising global temperatures and extreme weather events. The summit, which took place in Geneva, Switzerland, brought together representatives from over 150 countries.</p>
      
      <p>During the opening session, UN Secretary-General emphasized the need for immediate action. "We are at a critical juncture in our fight against climate change. The decisions we make today will determine the future of our planet for generations to come," he stated.</p>
      
      <p>The summit focused on several key areas:</p>
      
      <ul>
        <li>Reducing carbon emissions by 50% by 2030</li>
        <li>Transitioning to renewable energy sources</li>
        <li>Providing financial support to developing nations</li>
        <li>Implementing sustainable agricultural practices</li>
      </ul>
      
      <p>Several major economies announced new commitments to achieve carbon neutrality by 2050. The European Union revealed plans to invest €1 trillion in green technologies over the next decade, while China pledged to peak its carbon emissions before 2030.</p>
      
      <p>Climate activists gathered outside the venue, calling for more ambitious targets and immediate action. "The time for talk is over. We need concrete steps now," said Greta Thunberg, who addressed the crowd of protesters.</p>
      
      <p>The summit will continue for three days, with working groups focusing on specific aspects of climate policy. A final declaration is expected on Friday, outlining a global roadmap for addressing climate change in the coming years.</p>
      
      <p>Experts remain cautiously optimistic about the outcome. "We're seeing unprecedented political will to tackle this issue," said Dr. James Hansen, a leading climate scientist. "But the real test will be whether these commitments translate into meaningful action."</p>
    `,
    category: "Politics",
    date: "March 23, 2025",
    readTime: "5 min read",
    author: {
      name: "Jane Smith",
      role: "Political Correspondent",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    imageUrl: "/placeholder.svg?height=600&width=1200",
    tags: ["Climate Change", "Global Summit", "Environment", "Politics"],
  }
}

// This would normally come from your CMS
const relatedArticles = [
  {
    id: "2",
    title: "Environmental Activists Call for Stronger Climate Policies",
    excerpt: "Protesters gather in major cities demanding immediate action on climate change.",
    category: "Politics",
    date: "March 22, 2025",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "3",
    title: "New Study Reveals Accelerating Ice Melt in Arctic Region",
    excerpt: "Scientists warn of potential sea level rise exceeding previous predictions.",
    category: "Science",
    date: "March 21, 2025",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "4",
    title: "Renewable Energy Investments Reach Record High",
    excerpt: "Global shift towards clean energy accelerates as costs continue to decline.",
    category: "Business",
    date: "March 20, 2025",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
]

export default function ArticlePage({ params }: { params: { id: string } }) {
  const article = getArticleData(params.id)

  return (
    <div className="container py-6 md:py-10">
      <div className="mx-auto max-w-4xl">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href={`/${article.category.toLowerCase()}`} className="hover:text-primary">
            {article.category}
          </Link>
          <span className="mx-2">/</span>
          <span>{article.title}</span>
        </div>

        {/* Article Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src={article.author.avatar} alt={article.author.name} />
                <AvatarFallback>{article.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">{article.author.name}</p>
                <p className="text-xs text-muted-foreground">{article.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <CalendarIcon className="h-3 w-3" />
              <span>{article.date}</span>
            </div>

            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              <span>{article.readTime}</span>
            </div>
          </div>

          <div className="relative aspect-[2/1] w-full mb-6">
            <Image
              src={article.imageUrl || "/placeholder.svg"}
              alt={article.title}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                  className="bg-muted px-2 py-1 text-xs rounded-md hover:bg-muted/80"
                >
                  {tag}
                </Link>
              ))}
            </div>

            <Button variant="ghost" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-10" dangerouslySetInnerHTML={{ __html: article.content }} />

        {/* Author Bio */}
        <div className="border-t border-b py-6 mb-10">
          <div className="flex items-start gap-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={article.author.avatar} alt={article.author.name} />
              <AvatarFallback>{article.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-bold">{article.author.name}</p>
              <p className="text-sm text-muted-foreground mb-2">{article.author.role}</p>
              <p className="text-sm">
                Jane Smith is a political correspondent with over 10 years of experience covering international affairs
                and climate policy. She has reported from major global summits and interviewed world leaders across five
                continents.
              </p>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((article) => (
              <Card key={article.id}>
                <Link href={`/article/${article.id}`}>
                  <div className="relative aspect-video w-full">
                    <Image
                      src={article.imageUrl || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium text-primary">{article.category}</span>
                      <span className="text-xs text-muted-foreground">{article.date}</span>
                    </div>
                    <CardTitle className="text-base">{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-sm text-muted-foreground">{article.excerpt}</p>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>

        {/* Comments Section Placeholder */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Comments</h2>
          <div className="bg-muted p-6 rounded-lg text-center">
            <p className="text-muted-foreground">Comments section will be implemented here</p>
          </div>
        </div>
      </div>
    </div>
  )
}

