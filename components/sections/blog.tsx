"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, ExternalLink, BookOpen } from "lucide-react"

interface BlogArticle {
  title: string
  description: string
  publishDate: string
  url: string
  tags: string[]
  source: 'medium' | 'devto'
}

export function BlogSection() {
  const [articles, setArticles] = useState<BlogArticle[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setIsLoading(true)

        const [mediumRes, devtoRes] = await Promise.all([
          fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@kittipat_1413'),
          fetch('https://dev.to/api/articles?username=kittipat1413&per_page=10'),
        ])

        const [mediumData, devToData] = await Promise.all([mediumRes.json(), devtoRes.json()])

        const mediumArticles: BlogArticle[] = (mediumData.items || []).map((item: any) => ({
          title: item.title,
          description: stripHtml(item.description).substring(0, 200) + "...",
          publishDate: formatDate(item.pubDate),
          url: item.link,
          tags: item.categories || [],
          source: "medium",
        }))

        const devToArticles: BlogArticle[] = (devToData || []).map((item: any) => ({
          title: item.title,
          description: item.description,
          publishDate: item.readable_publish_date,
          url: item.url,
          tags: item.tag_list || [],
          source: "devto",
        }))

        setArticles([...mediumArticles, ...devToArticles])
      } catch (err) {
        console.error('Error fetching articles:', err)
        setError("Failed to fetch blog posts.")
      } finally {
        setIsLoading(false)
      }
    }

    fetchArticles()
  }, [])

  const stripHtml = (html: string) => {
    const tmp = document.createElement("div")
    tmp.innerHTML = html
    return tmp.textContent || tmp.innerText || ""
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })
  }

  const ArticleCard = ({ article, index }: { article: BlogArticle; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.5 }}
      className="group"
    >
      <Card className="h-full border border-muted bg-card shadow-sm hover:shadow-md transition-shadow duration-300 hover:border-primary/60">
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <CardTitle className="text-lg font-semibold leading-snug group-hover:text-primary transition-colors line-clamp-2">
                {article.title}
              </CardTitle>
              <CardDescription className="flex items-center gap-2 mt-1 text-sm">
                <Calendar className="w-4 h-4" />
                {article.publishDate}
              </CardDescription>
            </div>
            <Badge
              className={`text-white ${
                article.source === "medium"
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-blue-600 hover:bg-blue-700"
                }`}
            >
              {article.source === "medium" ? "Medium" : "DEV.to"}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm mb-3 line-clamp-3 leading-relaxed">
            {article.description}
          </p>
          <div className="flex items-center justify-between gap-2">
            <div className="flex flex-wrap gap-1 flex-1">
              {article.tags.slice(0, 3).map((tag, idx) => (
                <Badge key={idx} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
            <Button
              variant="outline"
              size="sm"
              className="text-xs flex gap-1 items-center"
              onClick={() => window.open(article.url, "_blank")}
            >
              <BookOpen className="h-3 w-3" />
              Read
              <ExternalLink className="h-3 w-3" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )

  const LoadingSkeleton = () => (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <Card key={i} className="animate-pulse">
          <CardHeader>
            <div className="h-4 bg-muted rounded w-3/4 mb-2" />
            <div className="h-3 bg-muted rounded w-1/2" />
          </CardHeader>
          <CardContent>
            <div className="h-3 bg-muted rounded w-full mb-2" />
            <div className="h-3 bg-muted rounded w-2/3" />
          </CardContent>
        </Card>
      ))}
    </div>
  )

  const ErrorState = () => (
    <div className="text-center max-w-xl mx-auto p-6 border border-destructive/20 bg-destructive/5 rounded-lg shadow-sm">
      <div className="mb-4">
        <p className="text-muted-foreground text-lg">
          Oops! Something went wrong while fetching your articles.
        </p>
      </div>
      <div className="flex justify-center mt-6">
        <Button
          variant="destructive"
          onClick={() => window.location.reload()}
          className="flex items-center gap-2"
        >
          Try Again
        </Button>
      </div>
    </div>
  )

  const mediumArticles = articles.filter((a) => a.source === "medium")
  const devToArticles = articles.filter((a) => a.source === "devto")

  return (
    <section
      id="blog"
      className="py-24 bg-gradient-to-br from-background to-secondary overflow-hidden text-foreground"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-12">
          <motion.h2
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold mb-6 text-primary"
          >
            Latest Blog Posts
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            I write about software development, cloud technologies, and my journey as a developer.
            Check out my latest articles from Medium and DEV Community.
          </motion.p>
        </div>

        {isLoading ? (
          <LoadingSkeleton />
        ) : error ? (
          <ErrorState />
        ) : (
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-12">
              <TabsTrigger value="all">All Posts</TabsTrigger>
              <TabsTrigger value="medium">Medium</TabsTrigger>
              <TabsTrigger value="devto">DEV.to</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[...mediumArticles.slice(0, 3), ...devToArticles.slice(0, 3)].map((article, i) => (
                  <ArticleCard key={`${article.source}-${i}`} article={article} index={i} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="medium">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {mediumArticles.slice(0, 6).map((article, i) => (
                  <ArticleCard key={`medium-${i}`} article={article} index={i} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="devto">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {devToArticles.slice(0, 6).map((article, i) => (
                  <ArticleCard key={`devto-${i}`} article={article} index={i} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mt-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="outline"
              onClick={() => window.open("https://medium.com/@kittipat_1413", "_blank")}
              className="flex items-center gap-2"
            >
              View All on Medium
              <ExternalLink className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              onClick={() => window.open("https://dev.to/kittipat1413", "_blank")}
              className="flex items-center gap-2"
            >
              View All on DEV.to
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}