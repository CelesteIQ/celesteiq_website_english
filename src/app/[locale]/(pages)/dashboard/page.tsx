"use client"

import React, {
  useState,
  FormEvent,
  ChangeEvent,
  useEffect,
} from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Trash2 } from "lucide-react"
import { uploadImageToCloudinary } from "@/helper/uploadImageToCloudinary"
import { authClient } from "@/lib/auth-client"
import { useRouter } from "next/navigation"
import { Spinner } from "@/components/ui/spinner"

type Blog = {
  _id: string
  category: string
  title: string
  summary: string
  image: string
  buttonText: string
  createdAt: string
}

export default function Page() {
  const router = useRouter()
  const { data: session, isPending } = authClient.useSession()
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [open, setOpen] = useState(false)
  // form state
  const [category, setCategory] = useState("")
  const [title, setTitle] = useState("")
  const [summary, setSummary] = useState("")
  const [imageFile, setImageFile] = useState<File | null>(null)

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isLoading, setIsLoading] = useState(false)


  const handleLogout = async () => {
    try {
      await authClient.signOut({
        fetchOptions: {
          onSuccess() {
            router.push("/login")
            router.refresh()
          },
        },
      })
    } catch (error) {
      console.error("Error during logout:", error)
    }
  }




  // Load blogs from API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setIsLoading(true)
        const res = await fetch("/api/blog")
        const data = await res.json()

        if (data.success) {
          setBlogs(data.data as Blog[])
        } else {
          console.error("Failed to load blogs:", data.message)
        }
      } catch (error) {
        console.error("Error loading blogs:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    setImageFile(file ?? null)
  }

  const handleAddBlog = async (e: FormEvent) => {
    e.preventDefault()

    if (!category.trim() || !title.trim() || !summary.trim() || !imageFile) {
      alert("Please fill out all required fields.")
      return
    }

    try {
      setIsSubmitting(true)

      const imageUrl = await uploadImageToCloudinary(imageFile)

      const res = await fetch("/api/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category: category.trim(),
          title: title.trim(),
          summary: summary.trim(),
          image: imageUrl,
          buttonText: "Read More",
        }),
      })

      const data = await res.json()

      if (!res.ok || !data.success) {
        console.error("Create blog error:", data)
        alert(data.message || "Failed to create blog.")
        return
      }

      const createdBlog: Blog = data.data

      setBlogs((prev) => [createdBlog, ...prev])

      setCategory("")
      setTitle("")
      setSummary("")
      setImageFile(null)
      setOpen(false)
    } catch (error) {
      console.error("Error submitting blog:", error)
      alert("Something went wrong while creating the blog.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDelete = async (id: string) => {

    const confirmDelete = confirm("Are you sure you want to delete this blog?")
    if (!confirmDelete) return

    try {
      const res = await fetch(`/api/blog/${id}`, {
        method: "DELETE",
      })

      const data = await res.json()

      if (!res.ok || !data.success) {
        console.error("Delete error:", data)
        alert(data.message || "Failed to delete blog.")
        return
      }

      setBlogs((prev) => prev.filter((b) => b._id !== id))
    } catch (error) {
      console.error("Error deleting blog:", error)
      alert("Something went wrong while deleting the blog.")
    }
  }


  const formatDate = (value: string) => {
    if (!value) return ""
    const date = new Date(value)
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    })
  }

  useEffect(() => {
    if (!isPending && !session) {
      router.replace("/login")
    }
  }, [isPending, session, router])

  if (isPending) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (!session) {
    return null
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-slate-50 text-slate-900">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 md:py-10">
        {/* Top bar */}
        <header className="flex items-center justify-between rounded-2xl border border-orange-100 bg-white/90 px-4 py-3 shadow-sm shadow-orange-100 backdrop-blur md:px-6">
          <div>
            <h1 className="text-lg font-semibold tracking-tight md:text-2xl">
              Blog Dashboard
            </h1>
            <p className="text-xs text-slate-500 md:text-sm">
              Create and manage high-impact articles with a clear, structured overview.
            </p>
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <Button
              size="sm"
              className="rounded-xl bg-orange-500 text-xs text-white shadow-sm hover:bg-orange-600 md:text-sm"
              onClick={() => setOpen(true)}
            >
              Add Blog
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              className="rounded-xl border-orange-200 bg-white text-xs text-slate-800 hover:bg-orange-50 md:text-sm"
            >
              Logout
            </Button>
          </div>
        </header>

        {/* Main card */}
        <Card className="border-slate-200 bg-white/90 shadow-md shadow-slate-100">
          <CardHeader className="border-b border-slate-100 pb-4">
            <CardTitle className="text-base md:text-lg">Your Blogs</CardTitle>
            <CardDescription className="text-xs text-slate-500 md:text-sm">
              Each blog includes a category, title, summary, featured image, and automatic
              timestamps.
            </CardDescription>
          </CardHeader>

          <CardContent className="pt-4">
            <div className="mb-4 flex items-center justify-between text-xs text-slate-500 md:text-sm">
              <span>
                Total blogs:{" "}
                <span className="font-medium text-slate-900">
                  {blogs.length}
                </span>
              </span>
              <span className="rounded-full bg-orange-50 px-2 py-1 text-[10px] font-medium text-orange-500 md:text-xs">
                {isLoading ? <Spinner /> : "Content overview"}
              </span>
            </div>

            <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50/60">
              <Table>
                <TableHeader>
                  <TableRow className="border-slate-200 bg-slate-50/80 hover:bg-slate-100/80">
                    <TableHead className="w-[14%] text-slate-700">
                      Category
                    </TableHead>
                    <TableHead className="w-[32%] text-slate-700">
                      Title
                    </TableHead>
                    <TableHead className="hidden w-[24%] text-slate-700 md:table-cell">
                      Summary
                    </TableHead>
                    <TableHead className="hidden w-[15%] text-slate-700 md:table-cell">
                      Created
                    </TableHead>
                    <TableHead className="hidden w-[10%] text-right text-slate-700 md:table-cell">
                      Image
                    </TableHead>
                    <TableHead className="w-[70px] text-right text-slate-700">
                      Action
                    </TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {blogs.length === 0 && !isLoading && (
                    <TableRow>
                      <TableCell
                        colSpan={6}
                        className="py-8 text-center text-xs text-slate-500 md:text-sm"
                      >
                        No blog posts yet. Click{" "}
                        <span className="font-medium text-orange-500">
                          Add Blog
                        </span>{" "}
                        to create your first article.
                      </TableCell>
                    </TableRow>
                  )}

                  {blogs.map((blog) => (
                    <TableRow
                      key={blog._id}
                      className="border-slate-200 hover:bg-white"
                    >
                      <TableCell className="align-top text-xs font-medium text-orange-600 md:text-sm">
                        <span className="inline-flex rounded-full bg-orange-50 px-2 py-1 text-[11px] font-semibold">
                          {blog.category}
                        </span>
                      </TableCell>

                      <TableCell className="align-top line-clamp-1 text-sm font-semibold text-slate-900">
                        {blog.title}
                      </TableCell>

                      <TableCell className="hidden max-w-xs align-top line-clamp-1 text-xs text-slate-600 md:table-cell">
                        {blog.summary}
                      </TableCell>

                      <TableCell className="hidden align-top text-xs text-slate-600 md:table-cell">
                        {formatDate(blog.createdAt)}
                      </TableCell>

                      <TableCell className="hidden align-top text-right text-xs text-slate-500 md:table-cell">
                        {blog.image ? (
                          <span className="inline-flex items-center justify-end text-emerald-500">
                            Image attached
                          </span>
                        ) : (
                          <span className="text-slate-400">No image</span>
                        )}
                      </TableCell>

                      <TableCell className="align-top text-right">
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-8 w-8 rounded-full text-slate-400 hover:bg-orange-50 hover:text-orange-500"
                          onClick={() => handleDelete(blog._id)}
                          aria-label="Delete blog"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Add Blog dialog */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="border-slate-200 bg-white text-slate-900 sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>Create a new blog</DialogTitle>
              <DialogDescription className="text-xs text-slate-500 md:text-sm">
                Provide the core details for your next article. All required fields are
                marked with <span className="text-red-500">*</span>.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleAddBlog} className="space-y-4 pt-2">
              {/* Category */}
              <div className="space-y-2">
                <Label
                  htmlFor="category"
                  className="flex items-center gap-1 text-xs md:text-sm"
                >
                  Category <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="category"
                  required
                  placeholder="e.g. AI Insights"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="border-slate-200 bg-slate-50 text-xs placeholder:text-slate-400 md:text-sm"
                />
              </div>

              {/* Title */}
              <div className="space-y-2">
                <Label
                  htmlFor="title"
                  className="flex items-center gap-1 text-xs md:text-sm"
                >
                  Title <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="title"
                  required
                  placeholder="The Future of AI in Business: 5 Trends to Watch in 2025"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="border-slate-200 bg-slate-50 text-xs placeholder:text-slate-400 md:text-sm"
                />
              </div>

              {/* Summary */}
              <div className="space-y-2">
                <Label
                  htmlFor="summary"
                  className="flex items-center gap-1 text-xs md:text-sm"
                >
                  Summary <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="summary"
                  rows={4}
                  required
                  placeholder="Write a concise introduction that highlights the key value of this article."
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  className="border-slate-200 bg-slate-50 text-xs placeholder:text-slate-400 md:text-sm"
                />
              </div>

              {/* Image file */}
              <div className="space-y-2">
                <Label
                  htmlFor="image"
                  className="flex items-center gap-1 text-xs md:text-sm"
                >
                  Featured image <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="image"
                  type="file"
                  accept="image/*"
                  required
                  onChange={handleImageChange}
                  className="border-slate-200 bg-slate-50 text-xs file:mr-3 file:rounded-md file:border-0 file:bg-orange-500 file:px-3 file:py-1 file:text-xs file:font-medium file:text-white hover:file:bg-orange-600 md:text-sm"
                />
                <p className="text-[11px] text-slate-500">
                  The selected image will be uploaded and stored using your media
                  service before the blog is created.
                </p>
              </div>

              <DialogFooter className="mt-2 flex gap-2">
                <Button
                  type="button"
                  variant="outline"
                  className="border-slate-200 bg-white text-xs text-slate-700 hover:bg-slate-50 md:text-sm"
                  onClick={() => setOpen(false)}
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-orange-500 text-xs text-white hover:bg-orange-600 md:text-sm"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? <Spinner /> : "Save Blog"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
