import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// This would normally come from your CMS
const featuredArticle = {
  id: "1",
  title: "Global Summit Addresses Climate Change Challenges",
  excerpt:
    "World leaders gather to discuss urgent measures against rising global temperatures and extreme weather events.",
  category: "Politics",
  date: "March 23, 2025",
  author: "Jane Smith",
  imageUrl: "/placeholder.svg?height=600&width=1200",
};

// These would normally come from your CMS
const latestArticles = [
  {
    id: "2",
    title: "Tech Giant Unveils Revolutionary AI Assistant",
    excerpt:
      "New artificial intelligence tool promises to transform how we interact with technology.",
    category: "Technology",
    date: "March 22, 2025",
    author: "John Doe",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "3",
    title: "Stock Markets Reach Record Highs Amid Economic Recovery",
    excerpt:
      "Investors celebrate as global markets show strong signs of post-pandemic growth.",
    category: "Business",
    date: "March 21, 2025",
    author: "Sarah Johnson",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "4",
    title: "National Team Secures Spot in World Cup Finals",
    excerpt:
      "Historic victory sends national soccer team to their first World Cup finals in decades.",
    category: "Sports",
    date: "March 20, 2025",
    author: "Mike Williams",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "5",
    title: "Award-Winning Film Director Announces New Project",
    excerpt:
      "Acclaimed filmmaker reveals details about upcoming movie featuring A-list cast.",
    category: "Entertainment",
    date: "March 19, 2025",
    author: "Emma Brown",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
];

// These would normally come from your CMS
const trendingArticles = [
  {
    id: "6",
    title: "Scientists Discover Potential Breakthrough in Renewable Energy",
    category: "Technology",
    date: "March 18, 2025",
  },
  {
    id: "7",
    title: "Major City Announces Ambitious Green Infrastructure Plan",
    category: "Politics",
    date: "March 17, 2025",
  },
  {
    id: "8",
    title: "Health Experts Release New Guidelines for Balanced Nutrition",
    category: "Health",
    date: "March 16, 2025",
  },
  {
    id: "9",
    title: "Streaming Platform Surpasses 500 Million Subscribers Globally",
    category: "Business",
    date: "March 15, 2025",
  },
  {
    id: "10",
    title: "Archeologists Uncover Ancient Civilization Artifacts",
    category: "Science",
    date: "March 14, 2025",
  },
];

export default function Home() {
  return (
    <div className="container py-6 md:py-10">
      {/* Featured Article */}
      <section className="mb-10">
        <div className="relative overflow-hidden rounded-xl">
          <Link href={`/article/${featuredArticle.id}`}>
            <div className="relative aspect-[2/1] w-full">
              <Image
                src={featuredArticle.imageUrl || "/placeholder.svg"}
                alt={featuredArticle.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 md:p-6 text-white">
                <div className="mb-2">
                  <span className="inline-block bg-primary px-2 py-1 text-xs font-medium text-primary-foreground rounded">
                    {featuredArticle.category}
                  </span>
                  <span className="ml-2 text-xs">{featuredArticle.date}</span>
                </div>
                <h1 className="text-xl md:text-3xl font-bold mb-2">
                  {featuredArticle.title}
                </h1>
                <p className="text-sm md:text-base mb-2 max-w-2xl">
                  {featuredArticle.excerpt}
                </p>
                <p className="text-xs">By {featuredArticle.author}</p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Latest Articles */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-6">Latest News</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {latestArticles.map((article) => (
              <Card key={article.id} className="overflow-hidden">
                <Link href={`/article/${article.id}`}>
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={article.imageUrl || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium text-primary">
                        {article.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {article.date}
                      </span>
                    </div>
                    <CardTitle className="text-lg">{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <CardDescription>{article.excerpt}</CardDescription>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <p className="text-xs text-muted-foreground">
                      By {article.author}
                    </p>
                  </CardFooter>
                </Link>
              </Card>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Button variant="outline">Load More</Button>
          </div>
        </div>

        {/* Sidebar */}
        <div>
          <div className="sticky top-20">
            {/* Categories Tabs */}
            <Tabs defaultValue="trending" className="mb-8">
              <TabsList className="w-full">
                <TabsTrigger value="trending" className="flex-1">
                  Trending
                </TabsTrigger>
                <TabsTrigger value="popular" className="flex-1">
                  Popular
                </TabsTrigger>
                <TabsTrigger value="editor" className="flex-1">
                  Editor's Pick
                </TabsTrigger>
              </TabsList>
              <TabsContent value="trending" className="mt-4">
                <div className="space-y-4">
                  {trendingArticles.map((article) => (
                    <Link key={article.id} href={`/article/${article.id}`}>
                      <div className="flex flex-col gap-1 border-b pb-4">
                        <h3 className="font-medium hover:text-primary">
                          {article.title}
                        </h3>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium text-primary">
                            {article.category}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {article.date}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="popular" className="mt-4">
                <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                  Popular articles will appear here
                </div>
              </TabsContent>
              <TabsContent value="editor" className="mt-4">
                <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                  Editor's picks will appear here
                </div>
              </TabsContent>
            </Tabs>

            {/* Newsletter Signup */}
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-2">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get the latest news delivered directly to your inbox.
              </p>
              <form className="space-y-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-3 py-2 border rounded-md text-sm"
                />
                <Button className="w-full">Subscribe</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
